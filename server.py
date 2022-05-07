from flask import Flask, render_template, request
from tinydb import TinyDB, Query

userDb = TinyDB('userDb.json')
galeryDb = TinyDB('galeryDb.json')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Qwerty123!'

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/addImg",methods=['POST'])
def addImg():
    data = request.get_json()
    galeryDb.insert({"link":data["link"]})
    return

@app.route("/galeryData",methods=['POST'])
def galeryData():
    data = request.get_json()
    page = int(data["params"]["page"])
    count = int(data["params"]["count"])
    _response = galeryDb.all()
    return {"data":_response[page*count:page*count+count],"length":galeryDb.count(lambda x:x)}

@app.route("/login",methods=['POST'])
def login():
    data = request.get_json()
    USER = Query()
    user = userDb.get((USER["login"] == data["params"]["login"]) & (USER["pass"] == data["params"]["pass"]))
    if user != None:
        return user
    else:
        return {"value":-1}

@app.route("/register",methods=["POST"])
def register():
    data = request.get_json()
    userDb.insert({"login":data["params"]["login"],"pass":data["params"]["pass"],"value":"1"})
    return True

if __name__ == '__main__':
    app.run(debug=True)
from cv2 import log
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

if __name__ == '__main__':
    app.run(debug=True)
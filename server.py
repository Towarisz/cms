from flask import Flask, render_template, request
from tinydb import TinyDB, Query

userDb = TinyDB('userDb.json')
galeryDb = TinyDB('galeryDb.json')
newsDb = TinyDB('newsDb.json')
bannerDb = TinyDB('bannerDb.json')
cardDb = TinyDB('cardDb.json')

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Qwerty123!'

@app.route('/')
def index():
    return render_template("index.html")

@app.route("/addGaleryImg",methods=['POST'])
def addGaleryImg():
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

@app.route("/deleteGaleryImg",methods=['POST'])
def deleteGaleryImg():
    data = request.get_json()
    galeryDb.remove(None,data["id"])
    return

@app.route("/addBannerImg",methods=['POST'])
def addBannerImg():
    data = request.get_json()
    bannerDb.insert({"link":data["link"],"title":data["title"],"content":data["content"]})
    return

@app.route("/bannerData",methods=['POST'])
def bannerData():
    _response = bannerDb.all()
    return _response

@app.route("/deleteBannerImg",methods=['POST'])
def deleteBannerImg():
    data = request.get_json()
    bannerDb.remove(None,data["id"])
    return

@app.route("/addNews",methods=['POST'])
def addNews():
    data = request.get_json()
    newsDb.insert({"title":data["title"],"content":data["content"]})
    return

@app.route("/newsData",methods=['POST'])
def newsData():
    data = request.get_json()
    page = int(data["params"]["page"])
    count = int(data["params"]["count"])
    _response = newsDb.all()
    _response.reverse()
    return {"data":_response[page*count:page*count+count],"length":len(_response)}

    
@app.route("/deleteNews",methods=['POST'])
def deleteNews():
    data = request.get_json()
    newsDb.remove(None,data["id"])
    return

@app.route("/addCard",methods=['POST'])
def addCard():
    data = request.get_json()
    cardDb.insert({"link":data["link"],"title":data["title"],"content":data["content"]})
    return

@app.route("/cardData",methods=['POST'])
def cardData():
    _response = cardDb.all()
    return {"data":_response}

@app.route("/deleteCard",methods=['POST'])
def deleteCard():
    data = request.get_json()
    cardDb.remove(None,data["id"])
    return

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
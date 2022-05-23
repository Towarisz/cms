from flask import Flask, render_template, request
from tinydb import TinyDB,where
from tinydb.operations import set

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
    id = 0
    if galeryDb.all():
        id = galeryDb.all()[-1]['id']+1
    galeryDb.insert({"link":data["params"]["link"],"id":id})
    return ""

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
    galeryDb.remove(
        where("id")==data["params"]["id"]
        )
    return ""

@app.route("/addBannerImg",methods=['POST'])
def addBannerImg():
    data = request.get_json()
    id = 0
    if bannerDb.all():
        id = bannerDb.all()[-1]['id']+1
    bannerDb.insert({"link":data["params"]["link"],"title":data["params"]["title"],"content":data["params"]["content"],"id":id})
    return ""

@app.route("/bannerData",methods=['POST'])
def bannerData():
    _response = bannerDb.all()
    return {"data":_response}

@app.route("/deleteBannerImg",methods=['POST'])
def deleteBannerImg():
    data = request.get_json()
    bannerDb.remove(where("id")==data["params"]["id"])
    return ""

@app.route("/addNews",methods=['POST'])
def addNews():
    data = request.get_json()
    id=0
    if newsDb.all():
        id = newsDb.all()[-1]['id']+1
    newsDb.insert({"title":data["params"]["title"],"content":data["params"]["content"],"id":id})
    return ""

@app.route("/newsData",methods=['POST'])
def newsData():
    data = request.get_json()
    page = int(data["params"]["page"])
    count = int(data["params"]["count"])
    _response = newsDb.all()
    _response.reverse()
    return {"data":_response[page*count:page*count+count],"length":len(_response)}


@app.route("/editNews",methods=['POST'])
def editNews():
    data = request.get_json()["params"]
    userDb.update(set("title",data["title"]),where("id") == data["id"])
    userDb.update(set("content",data["content"]),where("id") == data["id"])
    return ""
    
@app.route("/deleteNews",methods=['POST'])
def deleteNews():
    data = request.get_json()['params']
    newsDb.remove(where("id")==data["params"]["id"])
    return ""

@app.route("/addCard",methods=['POST'])
def addCard():
    data = request.get_json()['params']
    id=0
    if cardDb.all():
        id = cardDb.all()[-1]['id']+1
    cardDb.insert({"link":data["link"],"title":data["title"],"content":data["content"],"id":id})
    return ""

@app.route("/cardData",methods=['POST'])
def cardData():
    _response = cardDb.all()
    return {"data":_response}



@app.route("/deleteCard",methods=['POST'])
def deleteCard():
    data = request.get_json()["params"]
    cardDb.remove(where("id")==data["id"])
    return ""

@app.route("/login",methods=['POST'])
def login():
    data = request.get_json()
    user = userDb.get((where("login") == data["params"]["login"]) & (where("pass") == data["params"]["pass"]))
    if user != None:
        return user
    else:
        return {"value":-1}

@app.route("/deleteUser",methods=['POST'])
def deleteUser():
    data = request.get_json()
    userDb.remove(where("id") == data["params"]["id"])
    return ""

@app.route("/editUser",methods=['POST'])
def edit():
    data = request.get_json()["params"]
    userDb.update(set("login",data["login"]),where("id") == data["id"])
    userDb.update(set("pass",data["pass"]),where("id") == data["id"])
    userDb.update(set("value",data["value"]),where("id") == data["id"])
    users = userDb.all()
    return {"data":users}

@app.route("/getUsers",methods=['POST'])
def getUser():
    users = userDb.all()
    return {"data":users}

@app.route("/register",methods=["POST"])
def register():
    data = request.get_json()
    if userDb.get(where("login")==data["params"]["login"]) == None:
        userDb.insert({"login":data["params"]["login"],"pass":data["params"]["pass"],"value":"1","id":int(userDb.all()[-1]["id"])+1})
        return "1"
    return "0"

if __name__ == '__main__':
    app.run(debug=True)
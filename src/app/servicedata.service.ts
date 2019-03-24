import { Injectable } from '@angular/core';

@Injectable()
export class ServicedataService {
private arrayjson=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "profilepic":"assets/DSC06340.jpg",
    "details": [
      {
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"3Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "media":{"mode":"audio","source":["assets/audio.wav"]},
      "ImgSource":"assets/ganeshji.jpg",
      "comments":"[]"
    },
    {
      "id": 2,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"2Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "media":{"mode":"video","source":["assets/foo.mp4"]},
      "ImgSource":"assets/neta.jpeg",
      "comments":"[]"
    },
    {
      "id": 3,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"1Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "media":{"mode":"youtube","source":["https://www.youtube.com/embed/vlDzYIIOYmM"]},
      "ImgSource":"assets/1.jpg",
      "comments":"[]"
    }
  ],
    "address":"Hofstra University School of Law Hempstead, New York",
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org"
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "profilepic":"./assets/team1.png",
    "details": {
      "record":{
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"1Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "mode":"NAUVI",
      "ImgSource":"",
      "comments":"[]"
    }
    },
    "address":"Hofstra University School of Law Hempstead, New York",
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net"
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "profilepic":"./assets/team1.png",
    "details": {
      "record":{
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"1Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "mode":"NAUVI",
      "ImgSource":"",
      "comments":"[]"
    }
    },
    "address":"Hofstra University School of Law Hempstead, New York",
    "phone": "1-463-123-4447",
    "website": "ramiro.info"
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "profilepic":"./assets/team1.png",
    "details": {
      "record":{
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"2Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "mode":"NAUVI",
      "ImgSource":"",
      "comments":"[]"
    }
    },
    "address":"Hofstra University School of Law Hempstead, New York",
    "phone": "493-170-9623 x156",
    "website": "kale.biz"
   
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "profilepic":"./assets/team1.png",
    "details": {
      "record":{
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "likeCounter":0,
      "type":"A",
      "summary":"1Notepad is a basic text-editing program and it's most commonly used to view or edit text files. A text file is a file type typically identified by the .txt file name extension.",
      "mode":"NAUVI",
      "ImgSource":"",
      "comments":"[]"
    }
    },
    "address":"Hofstra University School of Law Hempstead, New York",
    "phone": "(254)954-1289",
    "website": "demarco.info"

  }
]
  constructor() { }
  getjsonData(){
    return this.arrayjson;
  }
}

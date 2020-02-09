class User {
  name = "";
  photoURL = "";
  id = null;
  constructor(name, photoURL) {
    this.name = name;
    this.photoURL = photoURL;
    // get uuid generator for id
  }
}

class Message {
  msgText = "";
  sender = null;
  recipient = null;
  timeSent = null;
  constructor(msgText, sender, recipient) {
    this.msgText = msgText;
    this.sender = sender;
    this.recipient = recipient;
    // set timeSent to curent date/time
  }
}

class Bmsg {
  //state
  currentUser;
  currentThread;

  // data
  users = [];
  threads = [];

}
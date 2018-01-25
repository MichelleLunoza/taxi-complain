import * as Firebase  from 'firebase/app'
require('firebase/database')

let config = {
  apiKey: 'AIzaSyBVXJqLa98z8EwegtYra8jVHv7yrfadfyI',
  authDomain: 'taxi-1fd65.firebaseapp.com',
  databaseURL: 'https://taxi-1fd65.firebaseio.com',
  projectId: 'taxi-1fd65',
  storageBucket: 'taxi-1fd65.appspot.com',
  messagingSenderId: '218888618100'
}
var app = Firebase.initializeApp(config);
var db = app.database()

export default db
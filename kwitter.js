var firebaseConfig = {
    apiKey: "AIzaSyBAVEQsk3XrjRX9cAwT-3QojBmwe0sAc2I",
    authDomain: "my-project---94.firebaseapp.com",
    databaseURL: "https://my-project---94-default-rtdb.firebaseio.com",
    projectId: "my-project---94",
    storageBucket: "my-project---94.appspot.com",
    messagingSenderId: "168294242439",
    appId: "1:168294242439:web:632a6a6674dfde221ac022",
    measurementId: "G-LSKTES8RNZ"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function adduser() {
    value_input= document.getElementById("username").value ;
    firebase.database().ref("/").child(value_input).update({
        purpose:"adding username"
    });
    document.getElementById("username").value="";
}
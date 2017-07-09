import firebase from 'firebase';

try {
	 var config = {
	 	apiKey: "AIzaSyDssMjB1ARDGlNgPL08bWvMv7VbUwSSt3g",
	    authDomain: "albin-todo-app.firebaseapp.com",
	    databaseURL: "https://albin-todo-app.firebaseio.com",
	    projectId: "albin-todo-app",
	    storageBucket: "albin-todo-app.appspot.com",
	    messagingSenderId: "328456486339"
	};

	firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
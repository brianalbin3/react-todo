import firebase from 'firebase';

 var config = {
 	apiKey: "AIzaSyDssMjB1ARDGlNgPL08bWvMv7VbUwSSt3g",
    authDomain: "albin-todo-app.firebaseapp.com",
    databaseURL: "https://albin-todo-app.firebaseio.com",
    projectId: "albin-todo-app",
    storageBucket: "albin-todo-app.appspot.com",
    messagingSenderId: "328456486339"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
	app: {
		name: 'Todo App',
		version: '1.0.0'
	},
	isRunning: true,
	user: {
		name: 'Brian',
		age: 29,
	}
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
	console.log('child_added', snapshot.key, snapshot.val());
});

var newTodoRef = todosRef.push({
	text: 'Build the wall'
});
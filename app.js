//app.js like require readlinsync this is needed  if we are running t int he terminal m,essed up when trying to change the dom

//const axios = require("axios");

// regular functon
// function assignResponseToVariable(response){
//     console.log(response.data);
// }
/// GET WITH AXIOS

// axios.get('https://swapi.co/api/people/1').then(assignResponseToVariable)

// es6
// What's up with that response you ask? Our callback function takes one argument. There, we are just defining how we will refer to the response object that comes back from the API. All the data is in response.data.
// axios.get("https://swapi.dev/api/people/1/").then((response) => {
//   console.log(response.data);
// }).catch(error => {
//     console.log(error)
// });

// newTodo = {
//     name:"serenity",
//     age: 40
// }

// axios.get('https://api.vschool.io/serenity/todo/', newTodo).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });
//   axios.post('https://api.vschool.io/serenity/todo/', newTodo).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });

//   axios.put('https://api.vschool.io/serenity/todo/6445accf78fe452c11492360', editedTodo).then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });
//   axios.delete('https://api.vschool.io/suzan/todo/5d0d36055723f72a73236f26').then(response => {
//     console.log(response.data);
//   }).catch(error => {
//     console.log(error)
//   });

// Get requests with axios
// url: https://api.vschool.io/serenitysmith/todo - v school api

// Get All- an array

//axios.get("https://api.vschool.io/serenitysmith/todo")
//.then(response => {
// putting data as h1 on page
//     for(let i = 0; i < response.data.length; i++){
//         const h1 = document.createElement('h1')
//         h1.textContent = response.data[i].title
//         document.body.appendChild(h1)
//     }
// })
//.then(response => console.log(response.data))
// .catch(error => console.log(error))

// Get One- single object- use id at he end
// axios.get("https://api.vschool.io/serenitysmith/todo/64544e5178fe452c11495425")
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

//axios.get("https://api.vschool.io/serenitysmith/todo")
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// how to i pull my name from my api????

// POST WITH AXIOS

// Post request--  creating content
// Request Body

// post takes two arguemnts after todo - the new object
// const newTodo = {
//     title: "My 3rd Todo",
//     description: "This is my 3rd entry",
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg"
//}
// comma after quotes
// axios.post("https://api.vschool.io/serenitysmith/todo", newTodo)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// event listneer for todo form to grab json data

// this dost log to the terminal
// const todoForm = document.todoform

// todoForm.addEventListener("submit", function(event){
//     event.preventDefault()

//     const newTodo = {
//         title: todoForm.title.value,
//         description: todoForm.description.value,
//         imgUrl: todoForm.imgUrl.value
//     }

//     axios.post("https://api.vschool.io/serenitysmith/todo", newTodo)
//         .then(response => console.log(response.data))
//         .catch(error => console.log(error))

// })

// if we wanted to delte data from the dom add a button

// const button = document.getElementById
// button.addEventListener("click", function(){
//     // our delete requestn qould be here
// })

//     axios.get("https://api.vschool.io/serenitysmith/todo")
// .then(res => console.log(res.data))
// .catch(err => console.log(err))

// GET all todos
// axios.get("https://api.vschool.io/scrimbalessons/todo")
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

// DELETE WITH AXIOS
// all these are promsie based and ned a .then and a .catch
// delete needs the ID of wht its deleteing

// axios.delete("https://api.vschool.io/serenitysmith/todo/6454636878fe452c11495588")
// .then(response => console.log(response.data))
//     .catch(error => console.log(error))

// put requests with axios

// put will need id and new data needed

// have to build a whole object to put
// const newTitle = {
//     title: " THIS SUCKS!!!!!"
//}
// ADD OBJECT TO END OF PUT

//axios.put("https://api.vschool.io/serenitysmith/todo/6454637e78fe452c1149558c", newTitle)
// .then(response => console.log(response.data))
// .catch(error => console.log(error))

// two objects below object.asssign can take two objects and uodate the first one- does same thing as put
// const person = {
//     name: "steve",
//     age: 20
// }

// const updates = {
//     name: "dan"
// }
// // second object uodates first object
// const result = Object.assign(person, updates)
// console.log(result)

// UPDATING A WEB PAGE

// GET's THE TODO's FROM THE DATABASE

// FORM FOR THE POST REQUEST

// GET's THE TODO's FROM THE DATABASE

function getData() {
  axios
    .get("https://api.vschool.io/serenitysmith/todo")
    .then((res) => listData(res.data))
    .catch((err) => console.log(err));
}

/// innHTml

// LISTS THE TODO TITLES TO THE DOM
function listData(data) {
  // this clears previous inouts so theyre not duPlicated but not everyone supports innHTML so better to loop through with a new function
  //document.getElementById('todo-list').innerHTML = ""
// call clear list function here 
clearList()
  for (let i = 0; i < data.length; i++) {
    const h1 = document.createElement("h1");
    h1.textContent = data[i].title;
    document.getElementById("todo-list").appendChild(h1);
  }
}
// looping through to clear data
// does the same ting as setting inner html to ""
function clearList() {
  const el = document.getElementById("todo-list");
  // while eleent has a first child
  while (el.firstChild) {
    // remove that child 1st
    el.removeChild(el.firstChild);
  }
}

getData();

const todoForm = document["todo-form"];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTodo = {
    title: todoForm.title.value,
  };

  todoForm.title.value = "";

  axios
    .post("https://api.vschool.io/serenitysmith/todo", newTodo)
    .then((res) => getData())
    .catch((err) => console.log(err));
});

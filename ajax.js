// const getUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const getUserss = fetch("https://jsonplaceholder.typicode.com/users")
// .then(response => {
//     if(!response.ok) {
//         throw new Error("Noooooooooooo")
//     } 
//     return response.json()
// })
// .then(data => console.log(data))
// .catch(err => console.log(err))


// const myPost = {
//     "userId": 1,
//     "id": 1,
//     "title": "Lin code",
//     "body": "Developer's scool"
//   }

//   const getPosts = fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//         "Content-Type": "Aplication/json"
//     },
//     body: JSON.stringify(myPost)
//   }).then(response => {
//     if(!response.ok) {
//         throw new Error("Noooooooooooo")
//     }
//     return response.json()
//   })
//   .then(response => console.log(response))
//   .catch(err => console.log(err))

  // Время
  let timeElement = document.getElementById('currentTime');
  setInterval(function () {
    let currentTime = new Date();
    timeElement.textContent = currentTime.toLocaleTimeString();
  }, 1000);

// const addNewElement = () => {
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(response => response.json())
// .then(items => {
//     const listItems = document.getElementById("list-item")
//     items.filter(element => {
//         const listItemElement = document.createElement("li");
//         listItemElement.textContent = element.id;
//         listItems.append(listItemElement)
//     })
// })
// .catch(err => console.log(err))
// }

let postsData = [];
let index = 0;
const posts = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(items => {postsData = items;})
.catch(err => console.log(err))

const result = document.getElementById('result')

 const addNameUser = () => {
  if (index < postsData.length) { // проверяем, есть ли ещё элементы
    const listItems = document.getElementById("list-item");
    const listItemElement = document.createElement("li");
    listItemElement.classList.add('animate__animated', 'animate__bounceIn');
    listItemElement.textContent = postsData[index].name;
    result.textContent = postsData[index].id; // добавляем каждый элемент в счетчик
    result.style.border = "0.8px solid white";
    listItems.appendChild(listItemElement);
    index++;
    showEmailUser = () => { // нажми на кнопку чтобы показать почту юзера
    listItemElement.textContent = postsData[index + 1].email;
    };
    listItems.addEventListener('dblclick', () => { // при двойном клике на почту он вернет его имя обратно.
    listItems.lastChild.textContent = postsData[index - 1].name
    })
  };
  };



  // удаляем последний элемент
const delLastElement = () => {
    let delList = document.getElementById('list-item');
    let delResult = document.getElementById('result')
    delList.removeChild(delList.lastElementChild)
    delResult.lastChild.textContent = postsData[index - 2].id // удаляем каждый удаленный элемент из счетчика
    index--
    
};   


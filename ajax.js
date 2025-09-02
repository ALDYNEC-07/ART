// Получение данных с сервера асинхронно
const posts = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(items => {postsData = items;})
.catch(err => console.log(err))

// Искусство художника
let artIndex = [
  "art-1.jpg","art-2.jpg","art-3.jpg", "art-4.jpg", "art-5.jpg",
  "art-6.jpg", "art-7.jpg"
]
let current = 0;

// Место работы художника
let jobUser = ["APPLE", "MILAN", "GRECY", "LONDON", "MOSKOV", "ALDY"]
let currentJob = 0;

// Описание картинок художником
let textUser = ["Я не копировал мир — я выкрикивал его свет и боль на холст.",
  "Я не искал гармонии — я рвал её на части и собирал вновь, чтобы показать правду.",
  "Мои звёзды — это не небо, а огонь души, что не умолкает.",
  "Я творил так, словно кисть — это последний крик моей жизни."
]
let currentTextUser = 0;

let postsData = [];
let index = 0;

 const addNameUser = () => {
  if (index < postsData.length) { // проверяем, есть ли ещё элементы

    // Описание искусства художника
    const rightProfile = document.getElementById('rightProfile')
    currentTextUser = (currentTextUser + 1) % textUser.length
    rightProfile.textContent = textUser[currentTextUser]

    // Искусство художника 
    const art = document.getElementById('art-user')
    const img = document.getElementById("img");
    current = (current + 1) % artIndex.length; 
    img.src = artIndex[current];
    img.width = 600
    img.height = 380
    img.style.borderRadius = "10px"
    art.appendChild(img)
    img.classList.add('animate__animated',"animate__headShake")

    // ID Художника
    const idUser = document.getElementById('idUser');
    const idUserText = document.getElementById('idUserText')
    idUser.textContent = postsData[index].id; // добавляем каждый user его id
    idUser.style.border = "0.5px solid black";
    idUser.style.boxShadow = "0px 0px 15px 1px inset rgb(226, 0, 0)"
    idUserText.textContent = "ID: "

    // Описание место работы художника
    const aboutUserJob = document.getElementById('aboutUserJob')
    const aboutUserJobText = document.getElementById('aboutUserJobText')
    currentJob = (currentJob + 1) % jobUser.length;
    aboutUserJobText.textContent = "PLACE OF WORK: "
    aboutUserJob.textContent = jobUser[currentJob];
    aboutUserJobText.appendChild(aboutUserJob);

    // Создание ли и получения имен
    const listItems = document.getElementById("list-item");
    const listItemElement = document.getElementById('item-name');
    listItemElement.classList.add('animate__animated', 'animate__fadeIn');
    listItemElement.textContent = postsData[index].name;
    listItemElement.style.boxShadow = "0px 0px 6px 1px rgb(226, 0, 0)"
    listItemElement.style.border = "1px solid white";
    listItemElement.style.textAlign = "left"
    listItems.appendChild(listItemElement);
    index++;

     // нажми на кнопку чтобы показать почту юзера
    showEmailUser = () => {
    listItemElement.textContent = postsData[index + 1].email;
    };
    // при клике на почту он вернет имя имя обратно.
    listItems.addEventListener('click', () => { 
    listItems.lastChild.textContent = postsData[index - 1].name
    })
  };
  };
  // удаляем последний элемент
// const delLastElement = () => {
//     let delList = document.getElementById('list-item');
//     let delIdUser = document.getElementById('idUser')
//     delList.removeChild(delList.lastElementChild)
//     delIdUser.lastChild.textContent = postsData[index - 2].id // удаляем каждый удаленный элемент из счетчика
//     index--
// };


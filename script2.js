// Имена художников
const artNames = [
      "Rebecca Shoulders",
      "Stephanie Bergey"
]
let currentName = 0;
// Instagran User
const artInsta = [
  "https://www.instagram.com/rebeccapletsch/",
  "https://www.instagram.com/palettemage/"
]
let currentInst = 0;

// Искусство художника
let artPic = ["Rebecca-Shoulders.png","Stephanie-Bergey.png"]
let current = 0;

// Описание картинок художником
let textUser = [
  "Ребекка — художница и коллажистка из Юты с портфолио, оформленным в удобном и понятном формате. Ее галерея лучших работ содержит изображения в высоком разрешении, позволяющие рассмотреть каждую деталь.",
  "Стефани Берджи — иллюстратор из Балтимора, работающая в акриле, акварели, гуаши и рисунке. В своём блоге на Pixpa она делится творческими историями, советами и личными новостями, создавая вокруг искусства живое сообщество."
]
let currentTextUser = 0;

 const content = () => {
        // Создание и получения имен
    const listItems = document.getElementById("list-item");
    const listItemElement = document.getElementById('item-name');
    listItemElement.classList.add('animate__animated', 'animate__fadeIn');
    currentName = (currentName + 1) % artNames.length;
    listItemElement.textContent = artNames[currentName];
    listItems.appendChild(listItemElement);

    // Описание искусства художника
    const aboutUser = document.getElementById('aboutUser')
    currentTextUser = (currentTextUser + 1) % textUser.length
    aboutUser.textContent = textUser[currentTextUser]

    // ART-Картина 
    const art = document.getElementById('art-user')
    const img = document.getElementById("img");
    current = (current + 1) % artPic.length; 
    img.src = artPic[current];
    img.width = 700
    img.height = 400
    img.style.borderRadius = "10px"
    art.appendChild(img)
    img.classList.add('animate__animated',"animate__headShake")


     // нажми на кнопку чтобы показать почту юзера
    showInsta = () => {
      currentInst = (currentInst + 1) % artInsta.length
      document.getElementById("instag")
      window.open(artInsta[currentInst],"_blank")
    };

    tema = () => {
      let profile = document.getElementById('profile')
      profile.style.backgroundColor = "beige";

      let temaButton = document.getElementById('temaButton')
      temaButton.addEventListener('dblclick', () => {
      profile.style.backgroundColor = "white";
      })
    }
  };




  // удаляем последний элемент
// const delLastElement = () => {
//     let delList = document.getElementById('list-item');
//     let delIdUser = document.getElementById('idUser')
//     delList.removeChild(delList.lastElementChild)
//     delIdUser.lastChild.textContent = postsData[index - 2].id // удаляем каждый удаленный элемент из счетчика
//     index--
// };




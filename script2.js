//Эффект — шапка скрывается, когда скроллишь вниз, и возвращается при прокрутке вверх
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 100) {
    header.classList.add('hide');
  } else {
    header.classList.remove('hide');
  }
  lastScroll = currentScroll;
});


// Instagran User
const artInsta = [
  "https://www.instagram.com/rebeccapletsch/",
  "https://www.instagram.com/palettemage/",
  "https://www.instagram.com/dmattozzi/",
  ""
]
let currentInst = 0;

// Искусство художника
let artPic = ["Rebecca-Shoulders.png","Stephanie-Bergey.png", "dominic.jpg", "fantastic.jpg"]
let current = 0;

// Имена художников
const artNames = [
      "Rebecca Shoulders",
      "Stephanie Bergey",
      "Dominic Mattozzi",
      "Redd Walicki"
]
let currentName = 0;

// Описание картинок художником
let textUser = [
  "Ребекка — художница и коллажистка из Юты с портфолио, оформленным в удобном и понятном формате. Ее галерея лучших работ содержит изображения в высоком разрешении, позволяющие рассмотреть каждую деталь.",
  "Стефани Берджи — иллюстратор из Балтимора, работающая в акриле, акварели, гуаши и рисунке. В своём блоге на Pixpa она делится творческими историями, советами и личными новостями, создавая вокруг искусства живое сообщество.",
  "Доминик Маттоцци — художник и педагог из штата Мэн. Портфолио — это визуальное удовольствие, в котором представлены ее работы в разных средах и стилях.",
  "Редд Валицки — немецкий неосовременный художник из Сиэтла, создающий картины на лазерно-вырезанном дереве. Его работы изображают диких сказочных женщин с внеземной атмосферой."
]
let currentTextUser = 0;

   //Добавляем миниатюрные картинки
    const littleArts = [["rebekka1.jpg", "rebekka2.jpg", "rebekka3.jpg"], ["stefani1.jpg","stefani2.jpg","stefani3.jpg"], ["dominic1.jpg", "dominic2.jpg", "dominic3.jpg"],
                        ["фантастик1.png", "фантастик2.png", "фантастик3.png"]]
    let curLitArt = 0;
    const littleImg = document.getElementById('littleImg')
    const img1 = document.getElementById('img1')
    const img2 = document.getElementById('img2')
    const img3 = document.getElementById('img3')

    let allArts = [img1, img2, img3];

     function updateImages() {
    allArts.forEach((allImg, index) => {
      allImg.src = littleArts[curLitArt][index];
      allImg.width = 150;
      allImg.height = 150;
      allImg.style.objectFit = "cover";
      allImg.style.borderRadius = "10px";
      littleImg.appendChild(allImg);
      allImg.classList.add("animate__animated", "animate__fadeIn");
    });
  }
  document.getElementById('myButton').addEventListener('click', () => {
       //Добавляем миниатюрные картинки
    curLitArt = (curLitArt + 1) % littleArts.length;
    updateImages();
  })

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
    aboutUser.style.border = "1px solid gray"
    aboutUser.style.borderRadius = "10px"
    aboutUser.classList.add('animate__animated',"animate__fadeIn")


    // ART-Картина 
    const art = document.getElementById('art-user')
    const img = document.getElementById("img");
    current = (current + 1) % artPic.length; 
    img.src = artPic[current];
    img.width = 700
    img.height = 400
    img.style.objectFit = "cover";
    img.style.borderRadius = "10px"
    art.appendChild(img)
    img.classList.add('animate__animated',"animate__headShake")

     // нажми на кнопку чтобы перейти на стр инсты
    showInsta = () => {
      currentInst = (currentInst + 1) % artInsta.length
      document.getElementById("instag")
      window.open(artInsta[currentInst],"_blank")
    };

    tema = () => {
      let profile = document.getElementById('profile')
      profile.style.backgroundColor = "cadetblue";

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




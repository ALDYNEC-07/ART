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


// Анимация логотипа 
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 2000
  });

// Анимация слов под логотипом
var textWrapper = document.querySelector('.ml4');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml4 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 80 * (i+1)
  }).add({
    targets: '.ml4',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 0
  });



  // скролл вниз - анимация
  (function () {
    const hero = document.querySelector('.hero');
    if (!hero) { console.warn('Элемент .hero не найден'); return; }

    const maxScale = 1.2;   // максимальный масштаб
    const scrollRange = window.innerHeight; // за какой пробег скролла доберёмся до maxScale

    function onScroll() {
      const s = Math.max(0, Math.min(1, window.scrollY / scrollRange));
      const scale = 1 + s * (maxScale - 1);
      hero.style.transform = `scale(${scale})`;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  })();


  
  document.querySelector('.scroll-indicator').addEventListener('click', () => {
  window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
});


// Получение данных с сервера асинхронно
const posts = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(items => {postsData = items;})
.catch(err => console.log(err))

// Искусство художника
let artIndex = [
  "art-1.jpg","art-6.jpg","art-3.jpg", "art-4.jpg", "art-5.jpg",
  "art-2.jpg", "art-7.jpg","art-8.jpg","art-9.jpg","art-10.jpg"
]
let current = 0;

// Место работы художника
let jobUser = ["APPLE", "MILAN", "GRECY", "LONDON", "MOSKOV", "ALDY", "New-York", "SPAIN", "NEW-ORLEANS", "GROZNY"]
let currentJob = 0;

// Описание картинок художником
let textUser = [
  "Я не копировал мир — я выкрикивал его свет и боль на холст.",
  "Это как буря страстей, кружащаяся в бесконечной игре света и тьмы, где каждый штрих несет свои тайны и разрушения",
  "Я не искал гармонии — я рвал её на части и собирал вновь, чтобы показать правду.",
  "Мои звёзды — это не небо, а огонь души, что не умолкает.",
  "Я творил так, словно кисть — это последний крик моей жизни.",
  "Я рисую, чтобы понять сам себя.",
  "Моё искусство — это мой дневник без слов.",
  "Я рисую то, что чувствую, а не то, что вижу.",
  "Я живу в красках, потому что слова недостаточны",
  "Каждый цвет — это нота в моей личной симфонии."
]
let currentTextUser = 0;

let postsData = [];
let index = 0;



const textt = document.getElementById('opisani')
textt.innerHTML = "Нажмите на SHOW чтобы посмотреть контент!"


 const content = () => {
  textt.innerHTML = "";
  if (index < postsData.length) { // проверяем, есть ли ещё элементы
    

      setTimeout(function() {
        textt.innerHTML = "Нажмите на стрелку чтобы посмотреть больше >";
      }, 5000);
   

        // Создание и получения имен
    const listItems = document.getElementById("list-item");
    const listItemElement = document.getElementById('item-name');
    listItemElement.classList.add('animate__animated', 'animate__fadeIn');
    listItemElement.textContent = postsData[index].name;
    listItems.appendChild(listItemElement);
    index++;

        // ID Художника
    const idUserDiv = document.getElementById('idUserDiv');
    const idUserText = document.getElementById('idUserText');
    const idUser = document.getElementById('idUser');
    idUserDiv.style.backgroundColor = "gainsboro";
    idUserDiv.style.borderRadius = "10px";
    idUserText.textContent = "ID: ";
    idUser.textContent = postsData[index - 1].id; // добавляем каждый user его id
    idUser.style.color = "black";

    // Описание место работы художника
    const aboutUserJob = document.getElementById('aboutUserJob');
    currentJob = (currentJob + 1) % jobUser.length;
    aboutUserJob.textContent = jobUser[currentJob];
    aboutUserJob.style.backgroundColor = "gainsboro";
    aboutUserJob.style.borderRadius = "10px";

    // Описание искусства художника
    const rightProfile = document.getElementById('rightProfile')
    currentTextUser = (currentTextUser + 1) % textUser.length
    rightProfile.textContent = textUser[currentTextUser]

    // ART-Картина 
    const art = document.getElementById('art-user')
    const img = document.getElementById("img");
    current = (current + 1) % artIndex.length; 
    img.src = artIndex[current];
    img.width = 600
    img.height = 300
    img.style.borderRadius = "10px"
    art.appendChild(img)
    img.classList.add('animate__animated',"animate__headShake")


     // нажми на кнопку чтобы показать почту юзера
    showEmailUser = () => {
    listItemElement.textContent = postsData[index + 1].email;
    };

    // при клике на почту он вернет имя имя обратно.
    listItems.addEventListener('click', () => { 
    listItems.lastChild.textContent = postsData[index - 1].name
    })

    tema = () => {
      let profile = document.getElementById('profile')
      profile.style.backgroundColor = "cadetblue";

      let temaButton = document.getElementById('temaButton')
      temaButton.addEventListener('dblclick', () => {
      profile.style.backgroundColor = "white";
      })
    }

    const wordSimfonia = document.getElementById('wordSimfonia');
    let text = "Каждый цвет - это нота в моей личной симфонии.";
    text = text.replace("цвет", `<span style="color: beige;">цвет</span>`);
    text = text.replace("нота", `<span style="color: beige;">нота</span>`);
    text = text.replace("симфонии", `<span style="color: beige;">симфонии</span>`);
    wordSimfonia.innerHTML = text;  
    wordSimfonia.style.padding = "20px"

  };
  };



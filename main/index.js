let books = [{
  "author": "Douglas Crockford",
  "imageLink": "../img/dCrockford.jpeg",
  "title": "JavaScript: The Good Parts: The Good Parts",
  "price": 30,
  "description": "With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must"
},
  {
    "author": "David Herman",
    "imageLink": "../img/dHerman.jpeg",
    "title": "Effective JavaScript: 68 Specific Ways to Harness the Power of JavaScript",
    "price": 22,
    "description": "Effective JavaScript is organized around 68 proven approaches for writing better JavaScript, backed by concrete examples. You’ll learn how to choose the right programming style for each project, manage unanticipated problems, and work more successfully with every facet of JavaScript programming from data structures to concurrency"
  },
  {
    "author": "David Flanagan",
    "imageLink": "../img/dFlanagan.jpeg",
    "title": "JavaScript: The Definitive Guide",
    "price": 40,
    "description": "This Fifth Edition is completely revised and expanded to cover JavaScript as it is used in today's Web 2.0 applications. This book is both an example-driven programmer's guide and a keep-on-your-desk reference, with new chapters that explain everything you need to know to get the most out of JavaScript"
  },
  {
    "author": " Eric Elliott",
    "imageLink": "../img/eElliott.jpeg",
    "title": "Programming JavaScript Applications",
    "price": 19,
    "description": "Take advantage of JavaScript’s power to build robust web-scale or enterprise applications that are easy to extend and maintain. By applying the design patterns outlined in this practical book, experienced JavaScript developers will learn how to write flexible and resilient code that’s easier—yes, easier—to work with as your code base grows."
  },
  {
    "author": "Addy Osmani",
    "imageLink": "../img/aOsmani.jpeg",
    "title": "Learning JavaScript Design Patterns",
    "price": 32,
    "description": "With Learning JavaScript Design Patterns, you’ll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you."
  },
  {
    "author": "Boris Cherny",
    "imageLink": "../img/bCherny.jpeg",
    "title": "Programming TypeScript",
    "price": 28,
    "description": "Any programmer working with a dynamically typed language will tell you how hard it is to scale to more lines of code and more engineers. That’s why Facebook, Google, and Microsoft invented gradual static type layers for their dynamically typed JavaScript and Python code. This practical book shows you how one such type layer, TypeScript, is unique among them: it makes programming fun with its powerful static type system."
  },
  {
    "author": "Alex Banks, Eve Porcello",
    "imageLink": "../img/aBanks.jpeg",
    "title": "Learning React, 2nd Edition",
    "price": 25,
    "description": "If you want to learn how to build efficient React applications, this is your book. Ideal for web developers and software engineers who understand how JavaScript, CSS, and HTML work in the browser, this updated edition provides best practices and patterns for writing modern React code. No prior knowledge of React or functional JavaScript is necessary."
  },
  {
    "author": "Bradley Meck Alex Young and Mike Cantelon",
    "imageLink": "../img/bMeck.jpeg",
    "title": "Node.js in Action",
    "price": 38,
    "description": "Node.js in Action, Second Edition is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications."
  },
  {
    "author": "Kyle Simpson",
    "imageLink": "../img/kSimpson.jpeg",
    "title": "You Don't Know JS Yet: Get Started",
    "price": 26,
    "description": "It seems like there's never been as much widespread desire before for a better way to deeply learn the fundamentals of JavaScript. But with a million blogs, books, and videos out there, just where do you START? Look no further!"
  },
  {
    "author": "John Resig and Bear Bibeault",
    "imageLink": "../img/jResig.jpeg",
    "title": "Secrets of the JavaScript Ninja",
    "price": 33,
    "description": "Secrets of the Javascript Ninja takes you on a journey towards mastering modern JavaScript development in three phases: design, construction, and maintenance. Written for JavaScript developers with intermediate-level skills, this book will give you the knowledge you need to create a cross-browser JavaScript library from the ground up."
  }
]
//Добавляем id обьектам массива
let items = books.map((n, i) => ({ id: i + 1, ...n}));
console.log(items);

// Добавляем разметку header 
const header = document.querySelector("header");
header.innerHTML = `
<div class="header-wrapper">
  <div class="logo">
    <img class="logo" src="../img/кость-38168409.jpg" alt="foto-logo">
  </div>
  <h2> BooK-ShoP дастиш фантастиш</h2>
  <div class="checkout">
    <button>
        <img class="kop3ina" data-checkout="checkout" src="../img/cart.png" alt="foto-kop3ina">
    </button>
    <div id="check" class="check">0</div>
    <div class="card-block" data-closeWrap="wrap">
    <p><span class="total-block">Итого:</span><span class="total-price">0</span></p>
    <button data-order="order">Confirm order</button>
    <button data-clin="clin">Cancel the order</button>
    </div>
  </div>
</div>
`
// Добавляем разметку main
const bookShop = document.querySelector(".book-shop");
const cardWrap = document.querySelector(".card-block");
function createElem() {
for(let i = 0; i < items.length; i++) {
  let book = document.createElement("div");
  book.id = items[i].id;
  book.className = "book";
  book.dataset.id = items[i].id;
  bookShop.appendChild(book);

  let wrapper = document.createElement("div");
  wrapper.className = "wrapper";
  book.appendChild(wrapper);

  let img = document.createElement("img");
  img.className = "img-book";
  img.src = items[i].imageLink;
  img.alt = items[i].title;
  wrapper.appendChild(img);
  
  let info = document.createElement("div");
  info.className = "info";
  wrapper.appendChild(info);

  let author = document.createElement("h3");
  author.className = "author";
  author.textContent = items[i].author;
  info.appendChild(author);

  let title = document.createElement("p");
  title.className = "title";
  title.textContent = items[i].title;
  info.appendChild(title);

  let span = document.createElement("p");
  span.className = "price-total-element"
  info.appendChild(span);

  let priceElement = document.createElement("span");
  priceElement.className = "price-element";
  priceElement.textContent = "Price:";
  span.appendChild(priceElement);

  let price = document.createElement("span");
  price.className = "price";
  price.textContent = items[i].price;
  span.appendChild(price);

  let popapCard = document.createElement("button");
  popapCard.className = "popap-card";
  popapCard.dataset.action = "action";
  popapCard.textContent = " Show more";
  info.appendChild(popapCard);


  let cardKop3ina = document.createElement("button");
  cardKop3ina.className = "card-kop3ina";
  cardKop3ina.dataset.cardKop3ina = "cardKop3ina";
  cardKop3ina.textContent = "Add to bag";
  info.appendChild(cardKop3ina);

  //попап с инфой о книгах
  let popap = document.createElement("div");
  popap.className = "popap" + " "+ items[i].author;
  popap.dataset.close = "wrap";
  info.appendChild(popap);

  let popapWrap = document.createElement("div");
  popapWrap.className = "popap-wrap";
  popapWrap.dataset.close = "wrap";
  popap.appendChild(popapWrap);

  let close = document.createElement("button");
  close.className = "close";
  close.dataset.close = "close";
  close.textContent = "X";
  popapWrap.appendChild(close);

  let descriptionPopap = document.createElement("p");
  descriptionPopap.className = "descriptionPopap";
  descriptionPopap.textContent = items[i].description;
  popapWrap.appendChild(descriptionPopap);
  // ----

}
}
createElem();

// Реализация попапа

window.addEventListener("click", (event) => {
  if(event.target.dataset.action === "action") {
    const infoWrapper = event.target.closest(".info");
    const div = infoWrapper.querySelector(".popap")
    div.classList.add('open');
  }
  if(event.target.dataset.close) {
    const infoWrapper = event.target.closest(".popap");
    console.log(infoWrapper);
    infoWrapper.classList.remove('open');
  }
  if(event.target.dataset.wrap) {
    const infoWrapper = event.target.closest(".popap");
    console.log(infoWrapper);
    infoWrapper.classList.remove('open');
  }
})
// Добавление книг в корзину

window.addEventListener("click", (event) => {
  // const kop3ina = document.querySelectorAll(".card-kop3ina");
  // console.log(kop3ina);
  if (event.target.dataset.cardKop3ina) {
    // находим карту книги
    const book = event.target.closest(".book");
    // собираем данные по книге
    const productBook = {
      id: book.dataset.id,
      imgSrc: book.querySelector(".img-book").getAttribute("src"),
      author: book.querySelector(".author").innerText,
      title: book.querySelector(".title").innerText,
      price: book.querySelector(".price").innerText,
    }
    console.log(productBook);
    // Создаем и добавляем карточку в корзину
    const cardItemBook = `<div class="card-block-wrapper" id="${productBook.id}">
                                  <img class="img-block" src="${productBook.imgSrc}" alt="jhg">
                                  <div class="block">
                                      <p class="author-block">${productBook.author}</p>
                                      <p class="title-block">${productBook.title}</p>
                                      <p class="price-total-element">
                                          <span class="price-element">Price:</span>
                                          <span class="price-block">${productBook.price}</span>
                                      </p>
                                  </div>
                                  <button class="kill-book" data-kill="kill">X</button>
                              </div>`;
    
    cardWrap.insertAdjacentHTML("afterbegin", cardItemBook);

    // при клике на книгу меняем значение корзины
    const val = document.getElementById("check");
    val.innerText = ++val.innerText;

  }
})

 // Открытие и закрытие корзины
window.addEventListener("click", (event) => {
  if(event.target.dataset.checkout) {
    const checkout = document.querySelector(".card-block");
    checkout.classList.add('open');
    calcPrice();
  }
  if(event.target.dataset.closewrap) {
    const infoBlock = document.querySelector(".card-block");
    infoBlock.classList.remove('open');
  }
  if(event.target.dataset.clin) {
    console.log("clin");
    const infoBlock = document.querySelector(".card-block");
    infoBlock.classList.remove('open');
    infoBlock.innerHTML=`
    <div><span>Итого:</span><span class="total-price">0</span></div>
    <button data-order="order">Confirm order</button>
    <button data-clin="clin">Cancel the order</button>`;
    const val = document.getElementById("check");
    val.innerText = 0;
  }
  if(event.target.dataset.kill) {
    console.log("kill");
    const book = event.target.closest(".card-block-wrapper").remove();
    const val = document.getElementById("check");
    val.innerText = --val.innerText;
    calcPrice();
  }
})


// Суммируем стоимость корзины

function calcPrice() {
  const priceEl = document.querySelectorAll(".card-block-wrapper");
  const total =document.querySelector(".total-price");
  let priceTotal = 0;

  priceEl.forEach(function(item) {
    const ddd = item.closest(".card-block-wrapper").querySelector(".price-block");
    console.log(ddd);
    priceTotal += parseInt(ddd.innerText);
  })
  total.innerText = priceTotal;
}
// открытие оформления листа заказа
window.addEventListener("click", (event) => {
  if (event.target.dataset.order) {
    const checkList = document.querySelector(".check-list");
    checkList.classList.add("open")
  }
});

// Name
const name1 = document.querySelector("#name");
name1.addEventListener("keyup", function(e) {
  name1.classList.add("re");
    let re = /^[A-ZА-ЯЁ]+$/i;
    let rer = /^\S*$/;
    const myPhone = document.getElementById('name').value;
    let valid = re.test(myPhone);
    let valid1 = rer.test(myPhone);
 if (myPhone.length >=4 && valid && valid1){
    name1.classList.add("rt");
    document.getElementById('message').style.color="green";
    output = 'The field is valid!';
  } else {
    name1.classList.remove("rt");
    document.getElementById('message').style.color="red";
    output = 'The field is invalid!';
  }
    document.getElementById('message').innerHTML = ``;
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML+output+'<hr />';

})

//Surname
const surname = document.querySelector("#surname");
surname.addEventListener("keyup", function(e) {
  surname.classList.add("re");
    let re = /^[A-ZА-ЯЁ]+$/i;
    let rer = /^\S*$/;
    const myPhone = document.getElementById('surname').value;
    let valid = re.test(myPhone);
    let valid1 = rer.test(myPhone);
 if (myPhone.length >=5 && valid && valid1){
    surname.classList.add("rt");
    document.getElementById('messageSurname').style.color="green";
    output = 'The field is valid!';
  } else {
    surname.classList.remove("rt");
    document.getElementById('message').style.color="red";
    output = 'The field is invalid!';
  }
    document.getElementById('messageSurname').innerHTML = ``;
    document.getElementById('messageSurname').innerHTML = document.getElementById('messageSurname').innerHTML+output+'<hr />';
})

// Дата доставки
function now(now) {
  var now = (new Date(new Date() * 1 + 24*60*60*1000)).toISOString().slice(0,10);
  let dateMin = document.querySelector("#date").min = now;
}
now();

// улица
const street = document.querySelector("#street");
street.addEventListener("keyup", function(e) {
  street.classList.add("re");
    let re = /^[0-9A-ZА-ЯЁ]+$/i; // только буквы и цифры
    let rer = /^\S*$/; //без пробелов
    const myPhone = document.getElementById('street').value;
    let valid = re.test(myPhone);
    let valid1 = rer.test(myPhone);
 if (myPhone.length >=5 && valid && valid1){
    street.classList.add("rt");
    document.getElementById('messageStreet').style.color="green";
    output = 'The field is valid!';
  } else {
    street.classList.remove("rt");
    document.getElementById('message').style.color="red";
    output = 'The field is invalid!';
  }
    document.getElementById('messageStreet').innerHTML = ``;
    document.getElementById('messageStreet').innerHTML = document.getElementById('messageStreet').innerHTML+output+'<hr />';
})
// номер дома
const house = document.querySelector("#house");
house.addEventListener("keyup", function(e) {
  house.classList.add("re");
    let re = /^[0-9]+$/i; // только цифры
    let rer = /^\S*$/; //без пробелов
    const myPhone = document.getElementById('house').value;
    let valid = re.test(myPhone);
    let valid1 = rer.test(myPhone);
 if (valid && valid1){
    house.classList.add("rt");
    document.getElementById('messageHouse').style.color="green";
    output = 'The field is valid!';
  } else {
    house.classList.remove("rt");
    document.getElementById('message').style.color="red";
    output = 'The field is invalid!';
  }
    document.getElementById('messageHouse').innerHTML = ``;
    document.getElementById('messageHouse').innerHTML = document.getElementById('messageHouse').innerHTML+output+'<hr />';
})

//функция на проверку номера телефона
const phone = document.querySelector("#phone");
phone.addEventListener("keyup", function(e) {
  phone.classList.add("re");
    var re = /^[\d\+][\d\(\)\ -]{3,14}\d$/;; // только цифры
    let rer = /^\S*$/; //без пробелов
    const myPhone = document.getElementById('phone').value;
    let valid = re.test(myPhone);
    let valid1 = rer.test(myPhone);
 if (valid && valid1){
    phone.classList.add("rt");
    document.getElementById('messagePhone').style.color="green";
    output = 'The field is valid!';
  } else {
    phone.classList.remove("rt");
    document.getElementById('message').style.color="red";
    output = 'The field is invalid!';
  }
    document.getElementById('messagePhone').innerHTML = ``;
    document.getElementById('messagePhone').innerHTML = document.getElementById('messagePhone').innerHTML+output+'<hr />';
})

// способ оплаты +
// 2 подарка
window.addEventListener("click", function(e) {
  var inputs = document.getElementsByName("checkbox");
  document.getElementById('messageGifts').innerHTML = `выбери себе подарок`;
  var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

  if (checkboxes.length = 1) {
    document.getElementById('messageGifts').innerHTML = ``;
  }
    if (checkboxes.length ==2) {
    document.getElementById('messageGifts').style.color="green";
    document.getElementById('messageGifts').innerHTML = `Прекрасный выбор!`;
  }
  if (checkboxes.length >2) {
    for (let index = 0; index < inputs.length; index++) {
      inputs[index].checked = false; 
      document.getElementById('messageGifts').style.color="red";
      output = 'The field is invalid!Choose 2 gifts.';
    }  
    document.getElementById('messageGifts').innerHTML = ``;
    document.getElementById('messageGifts').innerHTML = document.getElementById('messageGifts').innerHTML+output+'<hr />'; 
  }
})
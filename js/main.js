'use strict';

import { generateDataList } from "./data.js";

const dataList = generateDataList();
console.log(dataList);



// <article class="popup">
//       <img src="img/avatars/user01.png" class="popup__avatar" width="70" height="70" alt="Аватар пользователя">
//       <h3 class="popup__title">Уютное гнездышко для молодоженов</h3>
//       <p class="popup__text popup__text--address">102-0082 Tōkyō-to, Chiyoda-ku, Ichibanchō, 14−3</p>
//       <p class="popup__text popup__text--price">5200 <span>₽/ночь</span></p>
//       <h4 class="popup__type">Квартира</h4>
//       <p class="popup__text popup__text--capacity">2 комнаты для 3 гостей</p>
//       <p class="popup__text popup__text--time">Заезд после 14:00, выезд до 10:00</p>
//       <ul class="popup__features">
//         <li class="popup__feature popup__feature--wifi"></li>
//         <li class="popup__feature popup__feature--dishwasher"></li>
//         <li class="popup__feature popup__feature--parking"></li>
//         <li class="popup__feature popup__feature--washer"></li>
//         <li class="popup__feature popup__feature--elevator"></li>
//         <li class="popup__feature popup__feature--conditioner"></li>
//       </ul>
//       <p class="popup__description">Великолепная квартира-студия в центре Токио. Подходит как туристам, так и бизнесменам. Квартира полностью укомплектована и недавно отремонтирована.</p>
//       <div class="popup__photos">
//         <img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья">
//       </div>
//     </article>


// author:
// avatar: "img/avatars/user05.png"
// __proto__: Object
// location:
// x: "35.65598"
// y: "139.74921"
// __proto__: Object
// offer:
// address: "35.65598, 139.74921"
// checkin: "12:00"
// checkout: "12:00"
// description: "Отель с панорамным видом на город занимает 24-этажное здание в центре Москвы. Гости могут посещать клубный лаундж на 20 этаже с великолепным видом на Москву"
// features: Array(1)
// 0: "washer"
// length: 1
// __proto__: Array(0)
// guests: "5"
// photos: Array(1)
// 0: "http://o0.github.io/assets/images/tokyo/hotel1.jpg"
// length: 1
// __proto__: Array(0)
// price: "452"
// rooms: "4"
// title: "AZIMUT Отель Смоленская"
// type: "palace"
// __proto__: Object
// __proto__: Object

const offerTypeToOfferTypeText = {
    "flat":     "Квартира",
    "bungalow": "Бунгало",
    "house":    "Дом",
    "palace":   "Дворец",
}

const popupTemplate = document.querySelector("#card").content.querySelector(".popup");
const mapCanvasElement = document.querySelector("#map-canvas");

for (let i = 0; i < dataList.length; i++) {
    const popupElement = popupTemplate.cloneNode(true);

    popupElement.querySelector(".popup__avatar").src = dataList[i].author.avatar;
    popupElement.querySelector(".popup__text--address").textContent = dataList[i].offer.address;
    popupElement.querySelector(".popup__text--price").textContent =  `${dataList[i].offer.price} ₽/ночь`;
    popupElement.querySelector(".popup__type").textContent = offerTypeToOfferTypeText[dataList[i].offer.type];
    popupElement.querySelector(".popup__text--capacity").textContent = `${dataList[i].offer.rooms} комнаты для ${dataList[i].offer.guests} гостей`;
    popupElement.querySelector(".popup__text--time").textContent = `${dataList[i].offer.checkin}, выезд до ${dataList[i].offer.checkout}`;


    
    Array.from(popupElement.querySelector(".popup__features").children).map(elem => {
        debugger;
        console.log('feature scan');

        !dataList[i].offer.features.indexOf( elem.className.substr(elem.className.indexOf("--") + 2) ) 
        && popupElement.querySelector(".popup__features").removeChild(elem) && console.log(dataList[i].offer.features) && console.log(`Removed, ${dataList[i].offer.features} does not contain ${elem.className.substr(elem.className.indexOf("--") + 2)}`);

    })

    popupElement.querySelector(".popup__description").textContent = (dataList[i].offer.description);


    mapCanvasElement.append(popupElement);
}

// В блок .popup__photos выведите все фотографии из списка offer.photos. Каждая из строк массива photos должна записываться как src соответствующего изображения.
// Если данных для заполнения не хватает, соответствующий блок в карточке скрывается.

// Подключите модуль в проект.














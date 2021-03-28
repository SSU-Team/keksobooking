
import { getRandomFloat, getRandomSubarray } from "./utils.js";

const titleList = [
    "AZIMUT Отель Смоленская",
    "Рэдиссон Коллекшен",
    "Crowne Plaza",
    "Новотель Москва Сити",
];

const descriptionList = [
    "Отель с панорамным видом на город занимает 24-этажное здание в центре Москвы. Гости могут посещать клубный лаундж на 20 этаже с великолепным видом на Москву",
    "Роскошный отель расположен в сталинской высотке в Москве, на пересечении Кутузовского проспекта и улицы Новый Арбат. К услугам гостей крытый бассейн и современный спа-центр.",
    "Этот отель бизнес-класса с современными номерами и полным спектром услуг расположен в 5 минутах ходьбы от спортивного комплекса «Олимпийский».",
    "Этот отель с панорамным видом на московский городской пейзаж расположен на берегу Москвы-реки, в 30 минутах ходьбы от Красной площади.",
];

const typeList = [
    "palace", 
    "flat", 
    "house",
    "bungalow",
]

const checkinList = [
    "12:00",
    "13:00", 
    "14:00",
];

const checkoutList = [
    "12:00",
    "13:00", 
    "14:00",
]

const featuresList = [
    "wifi", 
    "dishwasher", 
    "parking", 
    "washer", 
    "elevator", 
    "conditioner",
]

const photosList = [
    "http://o0.github.io/assets/images/tokyo/hotel1.jpg", 
    "http://o0.github.io/assets/images/tokyo/hotel2.jpg", 
    "http://o0.github.io/assets/images/tokyo/hotel3.jpg",
];


const getAvatar = () => "img/avatars/user0" + getRandomFloat(1, 9, 0) + ".png";
const getTitle = () => titleList[ Math.floor(Math.random() * titleList.length) ];
const getDescription = () => descriptionList[ Math.floor(Math.random() * descriptionList.length) ];
const getType = () => typeList[ Math.floor(Math.random() * typeList.length) ];
const getCheckin = () => checkinList[ Math.floor(Math.random() * checkinList.length) ];
const getCheckout = () => checkoutList[ Math.floor(Math.random() * checkoutList.length) ];
const getFeaturesList = () => getRandomSubarray(featuresList);
const getPhotosList = () => getRandomSubarray(photosList);


const generateDataItem = () => {
    const obj = {};

    obj.author = {};
    obj.author.avatar = getAvatar();
    
    obj.location = {}
    obj.location.x = getRandomFloat(35.65000, 35.70000, 5);
    obj.location.y = getRandomFloat(139.70000, 139.80000, 5);
    
    obj.offer = {};
    obj.offer.title = getTitle();
    obj.offer.description = getDescription();
    obj.offer.address = obj.location.x + ", " + obj.location.y;
    obj.offer.price = getRandomFloat(0, 5000, 0);
    obj.offer.type = getType(0, 5000, 0);
    obj.offer.price = getRandomFloat(0, 5000, 0);
    obj.offer.price = getRandomFloat(0, 5000, 0);
    obj.offer.rooms = getRandomFloat(1, 5, 0);
    obj.offer.guests = getRandomFloat(1, 5, 0);
    obj.offer.checkin = getCheckin();
    obj.offer.checkout = getCheckout();

    obj.offer.features = getFeaturesList();
    obj.offer.photos = getPhotosList();
    
    return obj;
}

export const generateDataList = () => {
    const dataList = [];
    
    for (let i = 0; i < 10; i++) {
        dataList[i] = generateDataItem();
    }
    
    return dataList;
}
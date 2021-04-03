const offerTypeToOfferTypeText = {
  "flat":     "Квартира",
  "bungalow": "Бунгало",
  "house":    "Дом",
  "palace":   "Дворец",
}

const popupTemplate = document.querySelector("#card").content.querySelector(".popup");
const mapCanvasElement = document.querySelector("#map-canvas");

const createCustomPopupElement = (dataItem) => {
  const popupElement = popupTemplate.cloneNode(true);
  
  popupElement.querySelector(".popup__avatar").src = dataItem.author.avatar;
  popupElement.querySelector(".popup__text--address").textContent = dataItem.offer.address;
  popupElement.querySelector(".popup__text--price").textContent =  `${dataItem.offer.price} ₽/ночь`;
  popupElement.querySelector(".popup__type").textContent = offerTypeToOfferTypeText[dataItem.offer.type];
  popupElement.querySelector(".popup__text--capacity").textContent = `${dataItem.offer.rooms} комнаты для ${dataItem.offer.guests} гостей`;
  popupElement.querySelector(".popup__text--time").textContent = `${dataItem.offer.checkin}, выезд до ${dataItem.offer.checkout}`;

  if (dataItem.offer.features.length > 0) {
      Array.from(popupElement.querySelector(".popup__features").children).map(elem => {
          const classModifier = elem.className.substr(elem.className.indexOf(`--`) + 2);
          const isContained = dataItem.offer.features.some(elem => elem === classModifier);
          
          if (!isContained) {
              elem.parentNode.removeChild(elem);
          }
      })
  } else {
      popupElement.querySelector(".popup__features").parentNode.removeChild(popupElement.querySelector(".popup__features"));
  }

  popupElement.querySelector(".popup__description").textContent = (dataItem.offer.description);

  if (dataItem.offer.photos.length > 0) {
      popupElement.querySelector(".popup__photos").innerHTML = ``;
      dataItem.offer.photos.map(link => {
          const imgElement = document.createElement(`img`);
          
          imgElement.className = `popup__photo`;
          imgElement.width = 45;
          imgElement.height = 40;
          imgElement.alt = `Фотография жилья`;
          imgElement.src = link;   
  
          popupElement.querySelector(".popup__photos").append(imgElement);
      });
  } else {
      popupElement.querySelector(".popup__photos").parentNode.removeChild(popupElement.querySelector(".popup__photos"));
  }

  mapCanvasElement.append(popupElement);

  return popupElement;
}

const renderTiles = () => {  
  window.__map = L.map('map-canvas').setView(
    {
      lat: 35.6804,
      lng: 139.7690,
    }, 13
  );

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: '',
    }
  ).addTo(window.__map);
}

const renderPins = (dataList) => {
  const coords = {
    lat: 35.6804,
    lng: 139.7690,
  }

  const pinSetting = {
    keepInView: true,
  }

  const customPopupElement = `<h2>Tokio</h2>`;
  
  const icon = L.icon({
    iconUrl: './../img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    draggable: true,
  });

  const marker = L
    .marker(coords, { icon: icon, draggable: true })
    .addTo(window.__map)
    .bindPopup(customPopupElement, pinSetting);


  dataList.map(dataItem => {
    
    const coords = {
      lat: dataItem.location.x,
      lng: dataItem.location.y,
    }
    
    const customPopupElement = createCustomPopupElement(dataItem);
    
    const icon = L.icon({
      iconUrl: './../img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });
    
    const marker = L.marker(coords, { icon: icon })
      .addTo(window.__map)
      .bindPopup( customPopupElement );    
  });
}

export const renderMap = (dataList) => {
  renderTiles();
  renderPins(dataList);
}

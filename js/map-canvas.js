const offerTypeToOfferTypeText = {
  "flat":     "Квартира",
  "bungalow": "Бунгало",
  "house":    "Дом",
  "palace":   "Дворец",
}

const popupTemplate = document.querySelector("#card").content.querySelector(".popup");
const mapCanvasElement = document.querySelector("#map-canvas");

// ***

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

// ***

const getMainCustomPopupElement = () => {
  return `<h2>Tokio</h2>`
}

const getMainPinMarker = () => {
  const coords = {
    lat: 35.6804,
    lng: 139.7690,
  }
  
  const icon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    draggable: true,
  });

  return L.marker(coords, { icon: icon, draggable: true })
}

const renderMainPinMarker = (mainPinMarker, customPopup) => {
  const pinSetting = {
    keepInView: true,
  }

  const customPopupElement = customPopup;

  mainPinMarker
    .addTo(window.__map)
    .bindPopup(customPopupElement, pinSetting);
}

// ***

const getCustomPopupElement = (dataitem) => {
  const popupElement = popupTemplate.cloneNode(true);
  
  popupElement.querySelector(".popup__avatar").src = dataitem.author.avatar;
  popupElement.querySelector(".popup__text--address").textContent = dataitem.offer.address;
  popupElement.querySelector(".popup__text--price").textContent =  `${dataitem.offer.price} ₽/ночь`;
  popupElement.querySelector(".popup__type").textContent = offerTypeToOfferTypeText[dataitem.offer.type];
  popupElement.querySelector(".popup__text--capacity").textContent = `${dataitem.offer.rooms} комнаты для ${dataitem.offer.guests} гостей`;
  popupElement.querySelector(".popup__text--time").textContent = `${dataitem.offer.checkin}, выезд до ${dataitem.offer.checkout}`;

  if (dataitem.offer.features.length > 0) {
      Array.from(popupElement.querySelector(".popup__features").children).map(elem => {
          const classModifier = elem.className.substr(elem.className.indexOf(`--`) + 2);
          const isContained = dataitem.offer.features.some(elem => elem === classModifier);
          
          if (!isContained) {
              elem.parentNode.removeChild(elem);
          }
      })
  } else {
      popupElement.querySelector(".popup__features").parentNode.removeChild(popupElement.querySelector(".popup__features"));
  }

  popupElement.querySelector(".popup__description").textContent = (dataitem.offer.description);

  if (dataitem.offer.photos.length > 0) {
      popupElement.querySelector(".popup__photos").innerHTML = ``;
      dataitem.offer.photos.map(link => {
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

const getProperyPinMarker = (location, customPopup) => {
  const icon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });
  
  return L.marker(
    {
      lat: location.lat, 
      lng: location.lng
    }, 
    { 
      icon: icon 
    }).bindPopup(customPopup)
}


export const renderMapOnRequestError = () => {
  mapCanvasElement.style = `
    background-image: url('img/error.gif');
    background-repeat: repeat;
    `;
}

// избыточность передачи параметров

export const renderMap = (datalist = []) => {
  renderTiles()

  const markers = []
  datalist.map(dataitem => {
    const customPopupElement = getCustomPopupElement(dataitem)
    const properyPinMarker = getProperyPinMarker(dataitem.location, customPopupElement)

    markers.push( properyPinMarker )
    properyPinMarker.addTo(window.__map)
  })
  console.log(markers.length)

  // L.layerGroup(markers).addTo(window.__map);
  // // L.layerGroup(markers).removeLayers(window.__map);
  // console.log(L.layerGroup(markers).hasLayer(window.__map));
  // window.__map._layers = {}
  // console.log(window.__map)
  // console.log(L.layerGroup())

  


  const mainPinMarker = getMainPinMarker()
  const mainCustomPopupElement = getMainCustomPopupElement()
  renderMainPinMarker(mainPinMarker, mainCustomPopupElement)
}
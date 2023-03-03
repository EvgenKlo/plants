console.log('Оценка за работу 125 баллов.\n1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50:\n   1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной + 20;\n   2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг. При повторном нажатии на активную кнопку она деактивируется (становится неактивной) а привязанные к ней позиции возвращаются в исходное состояние (входит в состяние blur если есть еще активная кнопка или же перестають быть в блюре если это была единственная нажатая кнопка). +20;\n   3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur +10.\n2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50:\n   1) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым. +25;\n   2) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается. +25.\n3. В разделе contacts реализован select с выбором городов +25:\n   1) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе +15;\n   2) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу +10.');

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(1);
const body = document.body;
const gardenBtn = document.querySelector("#garden-botton");
const gardenBlur = document.querySelectorAll(".garden");
const plantingBtn = document.querySelector("#planting-botton");
const plantingBlur = document.querySelectorAll(".planting");
const lawnBtn = document.querySelector("#lawn-botton");
const lawnBlur = document.querySelectorAll(".lawn");
const buttons = document.querySelectorAll("button");
const imgAll = document.querySelectorAll('.img-all');
const selectContactUs = document.querySelector('.select-accord-btn');
const arrowSelectContactUs = document.querySelector('.select-circle-buttons');
const selectContactUsMenu = document.querySelector('.select');
const selectCity = document.querySelectorAll('.select-option');
const cityCard = document.querySelectorAll('.city-card');
const canandaigua = document.querySelector('.canandaigua_card');
const yonkers = document.querySelector('.yonkers-card');
const sherrill = document.querySelector('.sherrill-card');
const newYorkCity = document.querySelector('.new-york-city-card');
const textHeaderSelect = document.querySelector('.p-select');
const selectBotton = document.querySelector('.accordion-btn');
const sectionContacts = document.querySelector('.section-contacts');
const womanContacts = document.querySelector('.woman-contacts');
const priceContainer = document.querySelector('.price-container');
const priceItem = document.querySelectorAll('.price-item');
const priceItemContant = document.querySelectorAll('.price-item-contant');
const priceItemHeader = document.querySelectorAll('.price-item-header');

const priceBasicsHeader = document.querySelector('.basics-header');
const priceStandardHeader = document.querySelector('.standard-header');
const priceProCareHeader = document.querySelector('.pro-care-header');

const priceBasics = document.querySelector('.basics');
const priceStandard = document.querySelector('.standard');
const priceProCare = document.querySelector('.pro-care');

const priceBasicsArrow = document.querySelector('.basics-arrow');
const priceStandardArrow = document.querySelector('.standard-arrow');
const priceproCareArrow = document.querySelector('.pro-care-arrow');

const priceBasicsContant = document.querySelector('.basics-contant');
const priceStandardContant = document.querySelector('.standard-contant');
const priceProCareContant = document.querySelector('.pro-care-contant');

//  Активируем аккордин в Prise
priceBasicsHeader.addEventListener('click', openBasics);

function openBasics () {
  priceBasics.classList.toggle('active');
  priceStandard.classList.remove('active');
  priceProCare.classList.remove('active');
  priceBasicsArrow.classList.toggle('active');
  priceStandardArrow.classList.remove('active');
  priceproCareArrow.classList.remove('active');
  priceBasicsContant.classList.toggle('active');
  priceStandardContant.classList.remove('active');
  priceProCareContant.classList.remove('active');
}

priceStandardHeader.addEventListener('click', openStandard);

function openStandard () {
  priceStandard.classList.toggle('active');
  priceBasics.classList.remove('active');
  priceProCare.classList.remove('active');
  priceStandardArrow.classList.toggle('active');
  priceBasicsArrow.classList.remove('active');  
  priceproCareArrow.classList.remove('active');
  priceStandardContant.classList.toggle('active');
  priceBasicsContant.classList.remove('active');  
  priceProCareContant.classList.remove('active');
}

priceProCareHeader.addEventListener('click', openProCare);

function openProCare () {
  priceProCare.classList.toggle('active');
  priceStandard.classList.remove('active');
  priceBasics.classList.remove('active');
  priceproCareArrow.classList.toggle('active');
  priceBasicsArrow.classList.remove('active');
  priceStandardArrow.classList.remove('active');
  priceProCareContant.classList.toggle('active');  
  priceBasicsContant.classList.remove('active');
  priceStandardContant.classList.remove('active');  
}


//  Закрываем меню городов при клике на город и показываем карточку города
selectCity.forEach((city) => {
  city.addEventListener('click', closeMenu);
})

function closeMenu (e) {
  if (e.target.classList.contains('canandaigua')) {
    canandaigua.classList.add('active');
    textHeaderSelect.innerHTML = 'Canandaigua, NY';
  } else if (e.target.classList.contains('new-york-city')) {
    newYorkCity.classList.add('active');
    textHeaderSelect.innerHTML = 'New York City';
  } else if (e.target.classList.contains('yonkers')) {
    yonkers.classList.add('active');
    textHeaderSelect.innerHTML = 'Yonkers, NY';
  } else if (e.target.classList.contains('sherrill')) {
    sherrill.classList.add('active');
    textHeaderSelect.innerHTML = 'Sherrill, NY';
  };
  arrowSelectContactUs.classList.toggle('active');
  selectContactUsMenu.classList.toggle('active');
}

//  Меняем состояние Селекта в Cotuct Us
selectContactUs.addEventListener('click', toggleSelectContactUs);

function toggleSelectContactUs () {  
  womanContacts.classList.toggle('active');
  selectBotton.classList.toggle('active');
  sectionContacts.classList.toggle('active');
  selectContactUs.classList.toggle('active');
  textHeaderSelect.innerHTML = 'City';
  arrowSelectContactUs.classList.toggle('active');
  selectContactUsMenu.classList.toggle('active');
  canandaigua.classList.remove('active');
  newYorkCity.classList.remove('active');
  yonkers.classList.remove('active');
  sherrill.classList.remove('active');
  if (selectContactUsMenu.classList.contains('active')){
    selectContactUs.classList.add('active');
    womanContacts.classList.add('active');
    selectBotton.classList.add('active');
    sectionContacts.classList.add('active');
  };
}

//  Ховеры на кнопки
buttons.forEach((hover) => {
  hover.addEventListener("mouseover", mouseIn);
});

function mouseIn (e) {
  if (e.target.classList.contains("service-btn")){
    e.target.classList.add("hover");
  };
}

buttons.forEach((hover) => {
  hover.addEventListener("mouseout", mouseOut);
});

function mouseOut (e) {
  if (e.target.classList.contains("service-btn")){
    e.target.classList.remove("hover");
  };
}

//  Бургер
hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
    e.preventDefault();
    // Переключаем стили элементов при клике
    popup.classList.toggle("open");
    hamb.classList.toggle("active");
    body.classList.toggle("noscroll");    
    renderPopup();
  }

function renderPopup() {
    popup.appendChild(menu);
}


const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
};

popup.addEventListener("click", outsideMenuCloseClick);

// Закрытие попапа при клике вне меню
function outsideMenuCloseClick(e) {
  if(e.target.className !== "nav-list") {
    closeOnClick();
  };
};



//  Блюр на карточки
function noBlurOnGarden() {
  gardenBlur.forEach(gardenBlur => {
    gardenBlur.classList.remove("blur");
  });
}

function noBlurOnLawn() {
  lawnBlur.forEach(lawnBlur => {
    lawnBlur.classList.remove("blur");
  });
}

function noBlurOnPlanting() {
  plantingBlur.forEach(plantingBlur => {
    plantingBlur.classList.remove("blur");
  });
}

function blur () {
  imgAll.forEach(imgAll => {
    imgAll.classList.add("blur");
  });
  if (gardenBtn.classList.contains('active') && lawnBtn.classList.contains('active')) {
    noBlurOnGarden();
    noBlurOnLawn();
  } else if (gardenBtn.classList.contains('active') && plantingBtn.classList.contains('active')) {
    noBlurOnGarden();
    noBlurOnPlanting();
  } else if (lawnBtn.classList.contains('active') && plantingBtn.classList.contains('active')) {
    noBlurOnLawn();
    noBlurOnPlanting();
  } else if (lawnBtn.classList.contains('active')) {
    noBlurOnLawn();
  } else if (plantingBtn.classList.contains('active')) {
    noBlurOnPlanting();
  } else if (gardenBtn.classList.contains('active')) {
    noBlurOnGarden();
  } else {
    imgAll.forEach(imgAll => {
      imgAll.classList.remove("blur");
    });
  };
}

//  Вкл/выкл кнопку Garden при нажатии
gardenBtn.addEventListener('click', toggleGardenButton);

function toggleGardenButton() {
  gardenBtn.classList.toggle('active');
  if (gardenBtn.classList.contains('active') && lawnBtn.classList.contains('active')) {
    plantingBtn.parentElement.classList.add('no-active-planting');
  } else if (gardenBtn.classList.contains('active') && plantingBtn.classList.contains('active')) {
    lawnBtn.parentElement.classList.add('no-active-lawn');
  } else {
    plantingBtn.parentElement.classList.remove('no-active-planting');
    lawnBtn.parentElement.classList.remove('no-active-lawn');
  };
  blur();
};

//  Вкл/выкл кнопку Lawn при нажатии
lawnBtn.addEventListener('click', toggleLawnButton);

function toggleLawnButton() {
  lawnBtn.classList.toggle('active');
  if (lawnBtn.classList.contains('active') && gardenBtn.classList.contains('active')) {
    plantingBtn.parentElement.classList.add('no-active-planting');
  } else if (lawnBtn.classList.contains('active') && plantingBtn.classList.contains('active')) {
    gardenBtn.parentElement.classList.add('no-active-garden');
  } else {
    gardenBtn.parentElement.classList.remove('no-active-garden');
    plantingBtn.parentElement.classList.remove('no-active-planting');
  };
  blur();
}

//  Вкл/выкл кнопку Planting при нажатии
plantingBtn.addEventListener('click', togglePlantingButton);

function togglePlantingButton() {
  plantingBtn.classList.toggle('active');
  if (plantingBtn.classList.contains('active') && lawnBtn.classList.contains('active')) {
    gardenBtn.parentElement.classList.add('no-active-garden');
  } else if (plantingBtn.classList.contains('active') && gardenBtn.classList.contains('active')) {
    lawnBtn.parentElement.classList.add('no-active-lawn');
  } else {
    gardenBtn.parentElement.classList.remove('no-active-garden');
    lawnBtn.parentElement.classList.remove('no-active-lawn');
  };
  blur();
}

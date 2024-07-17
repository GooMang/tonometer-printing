function change_color(elem, color) {
  elem.style.background = color;
}

methodology = "";

// Добавление констант
const VerificationToolErrorValue = document.getElementById(
  "VerificationToolErrorValue"
);
const base = document.getElementById("base");
const btnStartProtocols = document.getElementById("btn-start__protocols");
const btnStartInfo = document.getElementById("btn-start__info");
const menuType__close = document.getElementsByClassName("menu__type");
const btnTypeTonometer__class = document.getElementsByClassName(
  "btn-type__tonometer"
);
const btnTypePulsOximeter__class = document.getElementsByClassName(
  "btn-type__puls_oximeter"
);
const btnTypeThermometer__class = document.getElementsByClassName(
  "btn-type__thermometer"
);
const btnTypeTonometer__id = document.getElementById("btn-type__tonometer");
const btnTypePulsOximeter__id = document.getElementById(
  "btn-type__puls_oximeter"
);
const btnTypeThermometer__id = document.getElementById("btn-type__thermometer");
const menyDevice__close = document.getElementsByClassName("menu__device");
const btnTypeTonometer = document.getElementsByClassName("btn-type__tonometer");
const btnTypeThermometer = document.getElementsByClassName(
  "btn-type__thermometer"
);
const btnTypePulsOximeter = document.getElementsByClassName(
  "btn-type__puls_oximeter"
);
const imgExample = document.getElementsByClassName("img_example");

// Эвент при нажатии на протоколы

btnStartProtocols.addEventListener("click", function () {
  this.classList.add("active");
  btnStartInfo.classList.remove("active");
  for (i = 0; i < menuType__close.length; i++) {
    menuType__close[i].classList.remove("hide");
  }
});

// Эвент при нажатии на инфо

btnStartInfo.addEventListener("click", function () {
  this.classList.add("active");
  btnStartProtocols.classList.remove("active");
  for (i = 0; i < menuType__close.length; i++) {
    menuType__close[i].classList.add("hide");
  }
  count = document.getElementsByClassName("full-info");
  count[0].classList.add("hide");
});

// Эвент при нажатии на тонометр

btnTypeTonometer__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.remove("hide");
  btnTypePulsOximeter__id.classList.remove("active");
  btnTypeThermometer__id.classList.remove("active");
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.remove("hide");
  }
});

// Эвент при нажатии на пульсоксиметры

btnTypePulsOximeter__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.remove("hide");
  btnTypeTonometer__id.classList.remove("active");
  btnTypeThermometer__id.classList.remove("active");
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.remove("hide");
  }
});

// Эвент при нажатии на термометр

btnTypeThermometer__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.remove("hide");
  btnTypeTonometer__id.classList.remove("active");
  btnTypePulsOximeter__id.classList.remove("active");
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.remove("hide");
  }
});

// Нажатие на любой термометр

for (var i = 0; i < btnTypeThermometer.length; i++) {
  console.log("sd");
  btnTypeThermometer[i].onclick = function () {
    console.log("ds");
    for (var j = 0; j < btnTypeTonometer.length; j++) {
      btnTypeTonometer[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypePulsOximeter.length; j++) {
      btnTypePulsOximeter[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypeThermometer.length; j++) {
      btnTypeThermometer[j].classList.remove("active");
    }
    for (var j = 0; j < imgExample.length; j++) {
      imgExample[j].classList.add("hide");
    }
    methodology = this.value;
    console.log(methodology);
    document.getElementById(methodology).classList.remove("hide");
    this.classList.add("active");
    document.getElementsByClassName("full-info")[0].classList.remove("hide");
    VerificationToolErrorValue.classList.add("disable");
    base.classList.remove("hide");
  };
}

// Нажатие на любой тонометр

for (var i = 0; i < btnTypeTonometer.length; i++) {
  btnTypeTonometer[i].onclick = function () {
    for (var j = 0; j < btnTypeTonometer.length; j++) {
      btnTypeTonometer[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypePulsOximeter.length; j++) {
      btnTypePulsOximeter[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypeThermometer.length; j++) {
      btnTypeThermometer[j].classList.remove("active");
    }
    for (var j = 0; j < imgExample.length; j++) {
      imgExample[j].classList.add("hide");
    }
    methodology = this.value;
    document.getElementById(methodology).classList.remove("hide");
    this.classList.add("active");
    document.getElementsByClassName("full-info")[0].classList.remove("hide");
    console.log(methodology);
    if (methodology == "Р 50.2.032-2004 автомат") {
      VerificationToolErrorValue.classList.add("disable");
      base.classList.remove("hide");
    } else if (methodology == "Р 1323565.2.001-2018 автомат") {
      VerificationToolErrorValue.classList.add("disable");
      base.classList.remove("hide");
    } else {
      VerificationToolErrorValue.classList.remove("disable");
      base.classList.add("hide");
    }
  };
}

// Нажатие на любой пульсоксиметр

for (var i = 0; i < btnTypePulsOximeter.length; i++) {
  btnTypePulsOximeter[i].onclick = function () {
    for (var j = 0; j < btnTypeTonometer.length; j++) {
      btnTypeTonometer[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypePulsOximeter.length; j++) {
      btnTypePulsOximeter[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypeThermometer.length; j++) {
      btnTypeThermometer[j].classList.remove("active");
    }
    for (var j = 0; j < imgExample.length; j++) {
      imgExample[j].classList.add("hide");
    }
    methodology = this.value;
    document.getElementById(methodology).classList.remove("hide");
    this.classList.add("active");
    document.getElementsByClassName("full-info")[0].classList.remove("hide");
    VerificationToolErrorValue.classList.add("disable");
    base.classList.remove("hide");
  };
}

// Печать

const btn_test = document.getElementById("printing");
let select = document.getElementById("Verifier");

async function printing_test() {
  let organizationName = document.getElementById("organizationName");
  let organizationAddress = document.getElementById("organizationAddress");
  let PhoneNumber = document.getElementById("PhoneNumber");
  let Mail = document.getElementById("Mail");
  let AccreditationNumber = document.getElementById("AccreditationNumber");
  let VerificationTool = document.getElementById("VerificationTool");
  let VerificationToolNumber = document.getElementById(
    "VerificationToolNumber"
  );
  let Location = document.getElementById("Location");
  let VerificationType = document.getElementById("VerificationType");
  let Verifier = document.getElementById("Verifier");
  let VerificationToolErrorValue = document.getElementById(
    "VerificationToolErrorValue"
  );
  await eel.start(
    organizationName.value,
    organizationAddress.value,
    PhoneNumber.value,
    Mail.value,
    AccreditationNumber.value,
    VerificationTool.value,
    VerificationToolNumber.value,
    Location.value,
    VerificationType.value,
    Verifier.value,
    VerificationToolErrorValue.value,
    methodology
  );
}

btn_test.addEventListener("click", printing_test);

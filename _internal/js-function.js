function change_color(elem, color) {
  elem.style.background = color;
}

methodology = "";

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
const btnTypeThermometer__id = document.getElementById("btn-type__termometer");
const menyDevice__close = document.getElementsByClassName("menu__device");
const btnTypeTonometer = document.getElementsByClassName("btn-type__tonometer");
const btnTypePulsOximeter = document.getElementsByClassName(
  "btn-type__puls_oximeter"
);
const imgExample = document.getElementsByClassName("img_example");

btnStartProtocols.addEventListener("click", function () {
  this.classList.add("active");
  btnStartInfo.classList.remove("active");
  for (i = 0; i < menuType__close.length; i++) {
    menuType__close[i].classList.remove("hide");
  }
});

btnStartInfo.addEventListener("click", function () {
  this.classList.add("active");
  btnStartProtocols.classList.remove("active");
  for (i = 0; i < menuType__close.length; i++) {
    menuType__close[i].classList.add("hide");
  }
  count = document.getElementsByClassName("full-info");
  count[0].classList.add("hide");
});

btnTypeTonometer__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.remove("hide");
  btnTypePulsOximeter__id.classList.remove("active");
  btnTypeThermometer__id.classList.remove("active");
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.remove("hide");
  }
});

btnTypePulsOximeter__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.remove("hide");
  btnTypeTonometer__id.classList.remove("active");
  btnTypeThermometer__id.classList.remove("active");
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.remove("hide");
  }
});

btnTypeThermometer__id.addEventListener("click", function () {
  this.classList.add("active");
  menyDevice__close[0].classList.add("hide");
  btnTypePulsOximeter__id.classList.remove("active");
  btnTypeTonometer__id.classList.remove("active");
  for (var i = 0; i < btnTypeTonometer.length; i++) {
    btnTypeTonometer[i].classList.remove("active");
  }
  for (var i = 0; i < btnTypePulsOximeter.length; i++) {
    btnTypePulsOximeter[i].classList.remove("active");
  }
  for (i = 0; i < btnTypePulsOximeter__class.length; i++) {
    btnTypePulsOximeter__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeTonometer__class.length; i++) {
    btnTypeTonometer__class[i].classList.add("hide");
  }
  for (i = 0; i < btnTypeThermometer__class.length; i++) {
    btnTypeThermometer__class[i].classList.remove("hide");
  }
  for (var j = 0; j < imgExample.length; j++) {
    imgExample[j].classList.add("hide");
  }
  document.getElementsByClassName("full-info")[0].classList.remove("hide")
  methodology = "Термометры ИК";
  document.getElementById(methodology).classList.remove("hide");
});

for (var i = 0; i < btnTypeTonometer.length; i++) {
  btnTypeTonometer[i].onclick = function () {
    for (var j = 0; j < btnTypeTonometer.length; j++) {
      btnTypeTonometer[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypePulsOximeter.length; j++) {
      btnTypePulsOximeter[j].classList.remove("active");
    }
    for (var j = 0; j < imgExample.length; j++) {
      imgExample[j].classList.add("hide");
    }
    methodology = this.value;
    document.getElementById(methodology).classList.remove("hide");
    this.classList.add("active");
    document.getElementsByClassName("full-info")[0].classList.remove("hide")
  };
}

for (var i = 0; i < btnTypePulsOximeter.length; i++) {
  btnTypePulsOximeter[i].onclick = function () {
    for (var j = 0; j < btnTypePulsOximeter.length; j++) {
      btnTypePulsOximeter[j].classList.remove("active");
    }
    for (var j = 0; j < btnTypeTonometer.length; j++) {
      btnTypeTonometer[j].classList.remove("active");
    }
    for (var j = 0; j < imgExample.length; j++) {
      imgExample[j].classList.add("hide");
    }
    imgExample[i].classList.remove("hide");
    methodology = this.value;
    document.getElementById(methodology).classList.remove("hide");
    this.classList.add("active");
    document.getElementsByClassName("full-info")[0].classList.remove("hide")
  };
}

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
  // console.log(organizationName.value)
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

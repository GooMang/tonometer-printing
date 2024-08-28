async function linkBaseInfo() {
  let basic_info = {
    name: await eel.callOrganizationName()(),
    address: await eel.callOrganizationAddress()(),
    phoneNumber: await eel.callPhoneNumber()(),
    mail: await eel.callMail()(),
    accreditationNumber: await eel.callAccreditationNumber()(),
    verifier: await eel.callVerifier()(),
    location: await eel.callLocation()(),
    VerificationType: await eel.callVerificationType()(),
    VerificationTool: await eel.callVerificationTool()(),
    VerificationToolNumber: await eel.callVerificationToolNumber()(),
    VerificationToolErrorValue: await eel.callVerificationToolErrorValue()()
  };
  sel = document.getElementsByClassName("basic_info");
  var j = 0;
  for (var key in basic_info) {
    arr = Object.values(basic_info)[j];
    i = 0;
    do {
      let newOption = new Option(Object.values(basic_info)[j][i]);
      sel[j].append(newOption);
      newOption.selected = true;
      newOption.value = Object.values(basic_info)[j][i];
      i++;
    } while (Object.values(basic_info)[j][i] != undefined);
    arr.value = Object.values(basic_info)[j][i];
    j++;
  }
}

function checker(bas) {
  console.log(bas);
  document.getElementById("check_open").classList.toggle("hide");
  document.getElementById("check_close").classList.toggle("hide");
}

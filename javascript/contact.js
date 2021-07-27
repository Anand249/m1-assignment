var selectContact = document.getElementById("contact");
var contactType = "email";
document.getElementById("contactLabel").innerHTML = "Enter your " + contactType;

selectContact.addEventListener("change", (e) => {
  contactType = `${e.target.value}`;
  console.log("contactType", contactType);
  if (contactType === "phone") {
    document.getElementById("contactLabel").innerHTML =
      "Enter your " + contactType;
  } else {
    document.getElementById("contactLabel").innerHTML =
      "Enter your " + contactType;
  }
});

const formEl = document.querySelector(".form");
const inputFname = document.querySelector(".form__fname");
const inputLname = document.querySelector(".form__lname");
const inputAge = document.querySelector(".form__age");
const inputProfession = document.querySelector(".form__profession");
const inputGender = document.querySelector(".form__gender");
const inputCountry = document.querySelector(".form__country");
const wrapperEl = document.querySelector(".wrapper");

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!inputFname.value.trim() || 
        !inputLname.value.trim() || 
        !inputAge.value.trim() || 
        !inputProfession.value.trim() || 
        !inputGender.value || 
        !inputCountry.value.trim()) {
        return alert("Iltimos, barcha maydonlarni to'ldiring");
    }

    const cardEl = document.createElement("div");
    cardEl.className = "card";

    cardEl.innerHTML = `
        <h3>${inputFname.value} ${inputLname.value}</h3>
        <p>Age: ${inputAge.value}</p>
        <p>Profession: ${inputProfession.value}</p>
        <p>Gender: ${inputGender.value}</p>
        <p>Country: ${inputCountry.value}</p>
    `;
    wrapperEl.appendChild(cardEl);
    inputFname.value = "";
    inputLname.value = "";
    inputAge.value = "";
    inputProfession.value = "";
    inputGender.value = "";
    inputCountry.value = "";
});

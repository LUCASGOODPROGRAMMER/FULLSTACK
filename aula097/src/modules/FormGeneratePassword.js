import generatePassword from "./GeneratePassword";

const btnGeneratePassword = document.querySelector(".btn");
const generatedPassword = document.querySelector(".generated-password");
const txtCharacters = document.querySelector("#txt-characters");
const cbNumbers = document.querySelector("#cb-numbers");
const cbCapitalLetters = document.querySelector("#cb-capital-letters");
const cbLowercaseLetters = document.querySelector("#cb-lowercase-letters");
const cbSymbols = document.querySelector("#cb-symbols");

txtCharacters.addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/\D/g, "");

  const valor = Number(e.target.value);

  if (valor > 30) {
    e.target.value = 30;
  }

  if (valor < 6 && e.target.value !== "") {
    e.target.value = 6;
  }
});

function generate() {
  const password = generatePassword(
    txtCharacters.value,
    cbNumbers.checked,
    cbCapitalLetters.checked,
    cbLowercaseLetters.checked,
    cbSymbols.checked
  );

  return password || "não foi possível gerar a senha";
}

export default () => {
  btnGeneratePassword.addEventListener("click", () => {
    generatedPassword.textContent = generate();
    generatedPassword.style.display = "flex";
  });
};

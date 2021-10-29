/*

Pendencias do desafio:
1. Ler e exibir dados do cartão - FEITO
2. Ler o checkbox - FEITO
3. Preencher automaticamente conforme CEP
4. Listar informações do carrinho dinamicamente - FEITO 
5. Redirecionar para uma página final e exibir os dados - FEITO

*/

/* Pegar os valores do INPUT */
/* Variáveis */
var nameElement = "";
var emailValue = "";
var addressElement = "";
var cityElement = "";
var stateElement = "";
var cepElement = "";
var cardnameValue = "";
var cardnumberValue = "";
var cardexpmValue = "";
var cardexpyValue = "";
var cardcvvValue = "";
var cepElement;

addressElement = document.getElementById("address");
stateElement = document.getElementById("state");
cityElement = document.getElementById("city");
cepElement = document.getElementById("cep");

/* Funções */
function capturar() {
  /* Billing Address Form */
  nameElement = document.getElementById("name"); // Aqui ele declara que nameValue é equivalente a linha "document.getElementById('name').value" (mesma coisa para o resto)
  emailValue = document.getElementById("email").value; // "document.getElementById('email').value" significa que ele vai pegar o valor do documento com o id "email"

  /* Payment Form */
  cardnameValue = document.getElementById("card_name").value;
  cardnumberValue = document.getElementById("card_number").value;
  cardexpmValue = document.getElementById("card_expm").value;
  cardexpyValue = document.getElementById("card_expy").value;
  cardcvvValue = document.getElementById("card_cvv").value;

  /* Checkbox */
  let checkbox = document.getElementById("end");

  if (checkbox.checked) {
    alert("O checkbox foi marcado");
  } else {
    alert("O checkbox não foi marcado");
  }

  localStorage.setItem("name", nameElement.value);
  localStorage.setItem("email", emailValue);
  localStorage.setItem("address", addressElement.value);
  localStorage.setItem("city", cityElement.value);
  localStorage.setItem("state", stateElement.value);
  localStorage.setItem("cep", cepElement.value);
  localStorage.setItem("cardname", cardnameValue);
  localStorage.setItem("cardnumber", cardnumberValue);
  localStorage.setItem("cardexpm", cardexpmValue);
  localStorage.setItem("cardexpy", cardexpyValue);
  localStorage.setItem("cardcvv", cardcvvValue);
}

console.log(cepElement);

cepElement.addEventListener("blur", (e) => {
  let search = cepElement.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };

  fetch(`https://viacep.com.br/ws/${search}/json/`).then((result) => {
    result.json().then((result) => {
      addressElement.value = result.logradouro;
      stateElement.value = result.uf;
      cityElement.value = result.localidade;
      cepElement.value = result.cep;
    });
  });
});

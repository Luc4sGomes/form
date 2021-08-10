const btnSubmit = document.querySelector(".btn-login");
const form = document.querySelector("form");

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")]; //pegando todos os input e colocando dentro de um array;

  fields.forEach((field) => {
    //varrendo o array e fazendo uma validacao se algum estiver vazio
    if (field.value === "") {
      //se estiver vazio vai add a classe na linha 13 no form;
      form.classList.add("validate-error");
    }
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    //isso forma meio que um loop para quando a animacao acabar ela estar disponivel dnv
    formError.addEventListener("animationend", (event) => {
      //quando chegar no final da animacao
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});
form.addEventListener("animationend", (event) => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});
form.addEventListener("animationstart", (event) => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

const app = document.querySelector("#app");
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

app.addEventListener("keypress", async function (event) {
  if (event.key === "Enter") {
    await delay(150);
    getInputValue();

    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function (event) {
  const input = document.querySelector("input");
  input.focus();
});

async function open_terminal() {
  createText("Welcome");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");

  createCode("about", "Who am i and what do i do.");
  createCode("ls", "See ls commands.");
  createCode("social", "ls my social networks.");

  await delay(500);
  new_line();
}

function new_line() {
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path");
  p.textContent = "lahcen-codes$";
  // span1.textContent = " in";
  // span2.textContent = "lahcen-codes $";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
}

function removeInput() {
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue() {
  const value = document.querySelector("input").value;
  if (value === "ls") {
    trueValue(value);

    createCode(
      "projects",
      "My github page with my projects. Follow me there ;)"
    );
    createCode("about", "Who am i and what do i do.");
    createCode("social", "ls my social networks.");
    createCode("clear", "Clean the terminal.");
  } else if (value === "projects") {
    trueValue(value);
    createText(
      "<a href='https://github.com/LahcenCodes' target='_blank'><i class='fab fa-github white'></i> LahcenCodes</a>"
    );
  } else if (value === "about") {
    trueValue(value);
    createText("Lahcen Codes!");
    createText(
      "👋 Welcome to LahcenCodes! <br> 👨‍💻 Software Developer | <span class='blue'> Python</span> Enthusiast <br> 🌍 Proudly Moroccan tech talent <br> 🚀 Empowering the next generation of coders <br> 💡 Sharing insights, tips, and code snippets <br> 🎯 Goal: Making coding accessible for ls"
    );
  } else if (value === "social") {
    trueValue(value);
    createText(
      "<a href='https://github.com/LahcenCodes' target='_blank'><i class='fab fa-github white'></i> ~LahcenCodes</a>"
    );
    createText(
      "<a href='https://www.linkedin.com/company/lahcencodes/' target='_blank'><i class='fab fa-linkedin-in white'></i> ~lahcencodes</a>"
    );
    createText(
      "<a href='https://www.instagram.com/lahcen_codes' target='_blank'><i class='fab fa-instagram white'></i> ~lahcen_codes</a>"
    );
  } else if (value === "social") {
    trueValue(value);
    createText("Didn't you mean: social?");
  } else if (value === "clear") {
    document.querySelectorls("p").forEach((e) => e.parentNode.removeChild(e));
    document
      .querySelectorls("section")
      .forEach((e) => e.parentNode.removeChild(e));
  } else {
    falseValue(value);
    createText(`command not found: ${value}`);
  }
}

function trueValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value) {
  const div = document.createElement("section");
  div.setAttribute("class", "type2");
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error");
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error");
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname) {
  const p = document.createElement("p");

  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text) {
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

open_terminal();

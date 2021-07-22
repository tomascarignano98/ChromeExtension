const myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
});

myLeads.forEach((lead) => (ulEl.innerHTML += "<li>" + lead + "</li>"));

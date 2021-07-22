const myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    renderLeads();
    inputEl.value = "";
  }
});

function renderLeads() {
  const li = document.createElement("li");
  li.textContent = myLeads[myLeads.length - 1];
  ulEl.append(li);
}

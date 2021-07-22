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
  const lead = myLeads[myLeads.length - 1];
  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = lead;
  a.target = "_blank";
  a.textContent = lead;
  li.append(a);
  ulEl.append(li);
}

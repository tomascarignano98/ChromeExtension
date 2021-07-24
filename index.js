let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  if (inputEl.value) {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads();
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

let myLeads = [];
const inputEl = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const ulEl = document.querySelector("#ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  inputEl.value = tabs[0].url;
});

inputBtn.addEventListener("click", function () {
  const inputValue = !myLeads.includes(inputEl.value) && inputEl.value; // if myLeads array doesn't include the given input value and the value is truthy.

  if (inputValue) {
    myLeads.push(inputValue);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads();
  }
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("myLeads");
  myLeads = [];
  ulEl.innerHTML = "";
});

function renderLeads() {
  ulEl.innerHTML = "";

  myLeads.forEach((lead) => {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = lead;
    a.textContent = lead;

    const li = document.createElement("li");
    li.append(a);

    ulEl.append(li);
  });
}

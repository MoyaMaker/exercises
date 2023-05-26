const medicineForm = document.getElementById("medicine-form");
const medicineInputId = document.getElementById("medicine-id");
const medicineInputName = document.getElementById("medicine-name");
const medicineInputExpire = document.getElementById("medicine-expire-date");

window.onload = function () {
  medicineInputName.focus();
}

medicineForm.addEventListener("submit", (event) => {
  event.preventDefault();

  addMedicineToList(medicineInputId.value, medicineInputName.value, medicineInputExpire.value);

  medicineForm.reset();

  medicineInputName.focus();
});


function addMedicineToList(id, name, expireDate) {
  const list = document.getElementById("medicines-list");

  const expireDateParse = Date.parse(expireDate);
  const todayDate = new Date();

  const setId = !id ? todayDate.getTime() : id;

  const content = `
    <td>
      <button type="button" onclick="edit('${setId}')">✏️</button>
      <button type="button" onclick="remove('${setId}')">🗑️</button>
    </td>
    <td>${name}</td>
    <td>${expireDate}</td>
    <td>${expireDateParse > todayDate.getTime() ? '✅' : '❌'}</td>
  `;

  if (!id) {
    list.innerHTML += `
      <tr id="${todayDate.getTime()}">
        ${content}
      </tr>
    `;
  } else {
    document.getElementById(id).innerHTML = content;
  }

}

function edit(id) {
  const name = document.getElementById(id).children[1].innerText;
  const expireDate = document.getElementById(id).children[2].innerText;

  medicineInputId.value = id;
  medicineInputName.value = name;
  medicineInputExpire.value = expireDate;

  medicineInputName.focus();
}

function remove(id) {
  document.getElementById(id).remove();
}
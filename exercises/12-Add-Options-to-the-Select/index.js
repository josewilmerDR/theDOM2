let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here

let select = document.querySelector("#mySelect")

for(let i = 0; i < countries.length; i++){
    //creamos un option
    let option = document.createElement("option")
    option.value = countries[i]
    option.text = countries[i]
    select.appendChild(option)
}

select.addEventListener("change", function(){
    let selectedOption = this.options[this.selectedIndex].text
    alert("Usted a seleccionado " + selectedOption)
})

















/**
let select = document.getElementById("mySelect");

// Agrega los países al selector
for (let i = 0; i < countries.length; i++) {
  let option = document.createElement("option");
  option.value = countries[i];
  option.text = countries[i];
  select.appendChild(option);
}

// Agrega un listener de eventos para el cambio de selector
select.addEventListener("change", function() {
  let selectedCountry = this.options[this.selectedIndex].text;
  alert("Has seleccionado " + selectedCountry);
});

 */
function populationUFs(){

  
  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then(res=> res.json())
  .then(states => {

    const ufSelect = document.querySelector("select[name=uf]");

      console.log(states)
      for(const state of states ) {
        
        ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option> `
      }
    });
}

populationUFs();

function getCities(event) {
  
  const citySelect = document.querySelector("select[name=city]");
  const stateInput = document.querySelector("input[name=state]");
  
  const ufValue = event.target.value;
  
  const indexOfSelectedState = event.target.selectedIndex;
  stateInput.value = event.target.options[indexOfSelectedState].text;
  console.log(indexOfSelectedState);
  
  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` ;
  
  citySelect.innerHTML  = "";
  citySelect.disabled = true;

  fetch(url)
  .then(res=> res.json())
  .then(cities => {
    
    

      console.log(cities)
      for(const city of cities ) {
        
        citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option> `
      }

      citySelect.disabled = false;
    });

}
 document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCities);


const itensToCollet = document.querySelectorAll(".items-grid li");

for(const item of itensToCollet){
  item.addEventListener("click", handleSelectedItem);
};

const collectedItems = document.querySelector('input[name=items]');

let selectedId = [];

function handleSelectedItem(event){

  const itemLi = event.target;

  itemLi.classList.toggle("selected");

  const itemId = itemLi.dataset.id;

  const alreadySelected =  selectedId.findIndex(function(item){
    const itemFound = item === itemId;
    return itemFound;
  })
  
  if(alreadySelected >= 0){

    const filteredItems = selectedId.filter(item => {
      const itemIsDifferent  = item != itemId;
      return itemIsDifferent;
    });

    selectedId = filteredItems;

  } else {
    selectedId.push(itemId);
  }

  console.log(selectedId);

  collectedItems.value = selectedId;
}

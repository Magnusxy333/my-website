const lista = JSON.parse(localStorage.getItem('anotações2')) || [{
  name:'Fazer a janta',
  dueDate: '11-12-2222'
}, {
  name:'Lavar a louça',
  dueDate: '11-12-2222'
}];

function enter(event) {
  if (event.key === 'Enter') {
    tudo();
  }  
}

renderLista();

function renderLista() {
  let listaHTML = "";

  for ( let i = 0; i < lista.length; i++) {
    const todoObject = lista[i];
    //const name = todoObject.name; <---shortcut for "const { name,  dueDate } = todoObejct.dueDate;" //
    //const dueDate = todoObject.dueDate; <---shortcut for "const { name, dueDate } = todoObejct.dueDate;"   //
    const { name, dueDate } = todoObject;
    const html = `
     <div class="div1">${name}</div> 
     <div class="div1">${dueDate}</div>       
     <button class="apagar" onclick="
       lista.splice(${i}, 1);
       renderLista();
     ">DELETAR</button>
    `;
    listaHTML += html;
  }

  console.log(listaHTML)

  document.querySelector('.pou')
  .innerHTML = listaHTML;

  localStorage.setItem('anotações2', JSON.stringify(lista))
}

function tudo() {
  const elementoInput = document.querySelector('.input');
  const name = elementoInput.value;

  const elementoData = document.querySelector('.data');
  const dueDate = elementoData.value;

  lista.push({
    name,
    dueDate
  });
  console.log(lista);

  elementoInput.value = '';

  renderLista();

  
}


console.log("cay é fofin");

//8:31:35// 

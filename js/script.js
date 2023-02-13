
/* 
        Elementos importados do HTML
cards = div que recebem background-image
title = título principal da página
*/
const cards = document.querySelectorAll('.panel')
const title = document.querySelector('h1')

// Evento onclick para quando o usuário interagir com o título principal, todos os cards perdem a classe 'active' e voltam pro estado original.
title.onclick = () =>{
    removeCardClass()
}

// Como possui mais de um card então é preciso usar querySelectorAll e assim é criada uma array, para rodar essa array existe o método forEach.
cards.forEach(card => {
    // então para cada (forEach) cartao quando receber interação com o usuário remover de todos a classe 'active' e adicionar a classe 'active' no que sofrer interação
    card.onclick = () => {
        removeCardClass()
        card.classList.add('active')
       
    }

});

// função usando forEach para remover a classe 'active'
function removeCardClass() {
    cards.forEach(card => {
        card.classList.remove('active')
    })
}

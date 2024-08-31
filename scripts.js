// Ao clicar, abre menu mobile
const openNavMobile = () => {
    let elements = document.getElementById("navMobile")
    elements.style.display = 'flex'

}
// Ao clicar, fecha menu mobile
const closeNavMobile = () => {
    let elements = document.getElementById("navMobile")
    elements.style.display = 'none'
}

// Precisei criar o método para fechar o menu mobile quando clicasse no link
const clickNavigateAndCloseModal = () => {
    const elements = document.getElementsByClassName('nav-link')
    for(element of elements){
       const target = element.getAttribute('href').substring(1);
       const scroll = document.getElementById(target)
       scroll.scrollIntoView({
        behavior: "smooth",

       })
       closeNavMobile()
    }
}

// Método para mostrar o menu fixo quando o usuário mover a pagina verticalmente
window.onscroll = () => {
    const menu = document.getElementsByClassName('sticky-menu')
    for(let i = 0; i < menu.length; i++){
        if(window.scrollY > 300){
            menu[i].classList.add('drop-drown-menu')
        }else{
            menu[i].classList.remove('drop-drown-menu')
        }
    }
}

const sendForm = () => {
    alert('Olá, aqui é o Matheus! \n\nObrigado por enviar sua mensagem, em breve entrarei em contato! \n\nAté mais!')
    location.reload();
}

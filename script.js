//Informações da Primeira Imagem
const image = document.getElementById('clickimage')


const changeImage = () => {

    const information = document.getElementById('additional-information')
    information.innerHTML = "Experiência única para os profissionais de som mais críticos."

    const headSet = document.getElementById('value-headset')
    headSet.innerHTML = '$ 199.00'

    const nameHeadSet = document.getElementById('name-head-set')
    nameHeadSet.innerHTML = 'HEADSET AUDIO TECHNICA'
}

image.addEventListener('click', changeImage)


//Informações da Segunda Imagem

const imageTwo = document.getElementById('click-image-two')


const changeImageTwo = () => {

    const information = document.getElementById('additional-information')
    information.innerHTML = "Headset gamer sem fio confortável."

    const headSetTwo = document.getElementById('value-headset')
    headSetTwo.innerHTML = '$ 50.00'

    const nameHeadSetTwo = document.getElementById('name-head-set')
    nameHeadSetTwo.innerHTML = 'HEADSET GAMING ALTEC'


}

imageTwo.addEventListener('click', changeImageTwo)

//Informações da Terceira Imagem
const imageThree = document.getElementById('click-image-three')


const changeImageThree = () => {

    const information = document.getElementById('additional-information')
    information.innerHTML = "Esse é o som da vitória."

    const headSetThree = document.getElementById('value-headset')
    headSetThree.innerHTML = '$ 300.00'

    const nameHeadSetThree = document.getElementById('name-head-set')
    nameHeadSetThree.innerHTML = 'HEADSET GAMER CORSAIR HS80'


}

imageThree.addEventListener('click', changeImageThree)




//mudar imagem 
function slider(anything) {
    document.querySelector('.one').src = anything;
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}


const btnMenu = document.getElementById('btnMenu')
const navegador = document.getElementById('navegador')
class nav{
  constructor(){
    this.HideOrShow()    
  }
  HideOrShow(){
    this.togglebtnMenu()
  }
  togglebtnMenu(){
    if(navegador.classList.contains('hide')){
      navegador.classList.remove('hide')
      btnMenu.classList.remove('menu')
      btnMenu.classList.add('equis')
    } else {
      navegador.classList.add('hide')
      btnMenu.classList.remove('equis')
      btnMenu.classList.add('menu')
    }
  }
}


function menu(){
  console.log(`Holi`)
  var navegador = new nav
}


const $form = document.querySelector('#contacto')

$form.addEventListener('submit', handlesubmit)

async function handlesubmit(event){
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'aplication/json'
    }
  })
  if (response.ok){
    this.reset()
    alert('Tu mensaje ha sido enviado, gracias por contactarme.')
  }
}


// const img_1 = document.getElementById('img-1')
// const img_2 = document.getElementById('img-2')
// const img_3 = document.getElementById('img-3')
// const img_4 = document.getElementById('img-4')
// const img_5 = document.getElementById('img-5')

const test_1 = document.getElementsByClassName('img-1')
const test_2 = document.getElementsByClassName('img-2')
const test_3 = document.getElementsByClassName('img-3')
const test_4 = document.getElementsByClassName('img-4')
const test_5 = document.getElementsByClassName('img-5')

hagale = function(){
  for (var i = 0; i<test_1.length; i++){
  if(test_1[i].classList.contains('pos-1')){
      test_1[i].classList.remove('pos-1')
      test_1[i].classList.add('pos-2')
      test_2[i].classList.remove('pos-2')
      test_2[i].classList.add('pos-3')
      test_3[i].classList.remove('pos-3')
      test_3[i].classList.add('pos-4')
      test_4[i].classList.remove('pos-4')
      test_4[i].classList.add('pos-5')
      test_5[i].classList.remove('pos-5')
      test_5[i].classList.add('pos-1')
    } else if(test_1[i].classList.contains('pos-2')){
      test_1[i].classList.remove('pos-2')
      test_1[i].classList.add('pos-3')
      test_2[i].classList.remove('pos-3')
      test_2[i].classList.add('pos-4')
      test_3[i].classList.remove('pos-4')
      test_3[i].classList.add('pos-5')
      test_4[i].classList.remove('pos-5')
      test_4[i].classList.add('pos-1')
      test_5[i].classList.remove('pos-1')
      test_5[i].classList.add('pos-2')
    } else if(test_1[i].classList.contains('pos-3')){
      test_1[i].classList.remove('pos-3')
      test_1[i].classList.add('pos-4')
      test_2[i].classList.remove('pos-4')
      test_2[i].classList.add('pos-5')
      test_3[i].classList.remove('pos-5')
      test_3[i].classList.add('pos-1')
      test_4[i].classList.remove('pos-1')
      test_4[i].classList.add('pos-2')
      test_5[i].classList.remove('pos-2')
      test_5[i].classList.add('pos-3')
    } else if(test_1[i].classList.contains('pos-4')){
      test_1[i].classList.remove('pos-4')
      test_1[i].classList.add('pos-5')
      test_2[i].classList.remove('pos-5')
      test_2[i].classList.add('pos-1')
      test_3[i].classList.remove('pos-1')
      test_3[i].classList.add('pos-2')
      test_4[i].classList.remove('pos-2')
      test_4[i].classList.add('pos-3')
      test_5[i].classList.remove('pos-3')
      test_5[i].classList.add('pos-4')
    } else{
      test_1[i].classList.remove('pos-5')
      test_1[i].classList.add('pos-1')
      test_2[i].classList.remove('pos-1')
      test_2[i].classList.add('pos-2')
      test_3[i].classList.remove('pos-2')
      test_3[i].classList.add('pos-3')
      test_4[i].classList.remove('pos-3')
      test_4[i].classList.add('pos-4')
      test_5[i].classList.remove('pos-4')
      test_5[i].classList.add('pos-5')
    }
  }
}
setInterval(hagale, 3000)





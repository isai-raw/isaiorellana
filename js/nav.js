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
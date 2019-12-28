
function page2(){
  let el = document.createElement('div')
  el.innerHTML='page two'
  return el
}
document.querySelector('#root').appendChild(page2())
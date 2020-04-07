var sec01 = document.getElementById('sec01')
var sec02 = document.getElementById('sec02')

function btnSec01(btnSec01 = 'click') {
  sec01.style.top = '0'
  sec02.style.bottom = '-100%'
}
function btnSecInicio(btnSecInicio = 'click') {
  sec01.style.top = '-100%'
  sec02.style.bottom = '-100%'
}
function btnSec02(btnSec02 = 'click') {
  sec01.style.top = '-100%'
  sec02.style.bottom = '0'
}
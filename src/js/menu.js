var teamviewer = document.getElementById('btn-teamviewer');
var anydesk = document.getElementById('btn-anydesk');
var aeroadmin = document.getElementById('btn-aeroadmin');

function btnMenuTV(){
  if(teamviewer.style.display == "none") {
    teamviewer.style.display = "grid"
    anydesk.style.display = "none"
    aeroadmin.style.display = "none"
  }else{
    teamviewer.style.display = "none"
  }
}
function btnMenuAD(){
  if(anydesk.style.display == "none") {
    teamviewer.style.display = "none"
    anydesk.style.display = "grid"
    aeroadmin.style.display = "none"
  }else{
    anydesk.style.display = "none"
  }
}
function btnMenuAA(){
  if(aeroadmin.style.display == "none") {
    teamviewer.style.display = "none"
    anydesk.style.display = "none"
    aeroadmin.style.display = "grid"
  }else{
    aeroadmin.style.display = "none"
  }
}

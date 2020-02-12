const dob = document.getElementsByClassName('dob');

function dobbelStenen (){
  for (var i = 0; i < dob.length; i++) {
    dob[i].innerText = Math.floor((Math.random() * 6) + 1);
  }
}

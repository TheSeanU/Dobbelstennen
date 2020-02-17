function dobbelStenen (){
  var dob = document.getElementsByClassName('dob');
  for (var i = 0; i < dob.length; i++) {
    dob[i].innerText = Math.floor((Math.random() * 6) + 1);
  }
  var count = {};
  var sortDob = [...document.getElementsByClassName('dob')].map(e => e.innerHTML).sort();
  for(var j = 0; j < sortDob.length; j++){
    var num = sortDob[j];
     count[num] = count[num] ? count[num] + 1 : 1;
     if (count === undefined){
       return ["0"]
     }
   }
   var result = Object.keys(count).map(function (key) {
     return[count[key], Number(key)];
  })

  var dobResult = count;
  for (var i = 0; i < dobResult.length; i++) {
    document.getElementsByClassName('result')[0].innerHTML = dobResult[i];

  }
  console.log(dobResult);
  console.log(result);
  console.log(count);
  console.log(sortDob);
}

dobbelStenen();

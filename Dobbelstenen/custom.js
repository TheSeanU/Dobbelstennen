function dobbelStenen (){
  var dob = document.getElementsByClassName('dob');

  for (var i = 0; i < dob.length; i++) {
    dob[i].innerHTML = Math.floor((Math.random() * 6) + 1);
  }

  var sortDob = [...document.getElementsByClassName('dob')].map(e => e.innerHTML).sort();
  var count = {};

  for(var i = 0; i < sortDob.length; i++){
    var num = sortDob[i];
     count[num] = count[num] ? count[num] + 1 : 1;
   }
   if (count[num] === 0) {
    return 0;
   }
   var result = Object.keys(count).map(function (key) {
       return [" " + count[key] + " x " + Number(key)];
   });

   var prResult = document.getElementsByClassName('result');
   for (var i = 0; i < prResult.length; i++) {
     prResult[i].innerHTML = result;
     console.log(result);
   }
}

dobbelStenen();

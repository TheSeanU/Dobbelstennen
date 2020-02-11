const dobbelArray = [
  'dobbel1',
  'dobbel2',
  'dobbel3',
  'dobbel4',
  'dobbel5',
  'dobbel6',
  'dobbel7',
  'dobbel8',

];  dobbelArray.forEach(dobbelStenen);

function dobbelStenen(random) {
  let dobbel1 = document.getElementById("dob1").innerText = Math.floor((Math.random() * 6) + 1);
  let dobbel2 = document.getElementById("dob2").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel3 = document.getElementById("dob3").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel4 = document.getElementById("dob4").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel5 = document.getElementById("dob5").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel6 = document.getElementById("dob6").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel7 = document.getElementById("dob7").innerHTML = Math.floor((Math.random() * 6) + 1);
  let dobbel8 = document.getElementById("dob8").innerHTML = Math.floor((Math.random() * 6) + 1);
  return dobResult
}


console.log(dobbelStenen)

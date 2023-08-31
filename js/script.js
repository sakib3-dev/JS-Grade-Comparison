// JavaScript Comparison

// function myFunction() {
//   let age = document.getElementById("age").value;
//   if (age < 18) {
//     document.getElementById("demo").innerHTML = "child";
//   }
//    else if (age >= 18 && age < 30) {
//     document.getElementById("demo").innerHTML = "young";
//   }

//    else if (age >= 30) {
//     document.getElementById("demo").innerHTML = "old";
//   }
    
// }


function myFunction(){
  let point = document.getElementById("point").value;


  if (point < 33) {
         document.getElementById("print").innerHTML = "Fail";
  }
  else if (point >= 33 && point <= 50) {
    document.getElementById("print").innerHTML = "D";  
  }

  else if (point >= 51 && point <= 60) {
    document.getElementById("print").innerHTML = "C";  
  }

  else if (point >= 61 && point <= 70) {
    document.getElementById("print").innerHTML = "A";  
  }
  else if (point >= 71 && point <= 80) {
    document.getElementById("print").innerHTML = "A+";  
  }
  else if (point >= 81 && point <= 99) {
    document.getElementById("print").innerHTML = " GOLDEN A+";  
  }
}


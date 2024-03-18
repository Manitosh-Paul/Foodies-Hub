var plus = document.getElementById('inc');
var minus = document.getElementById('dec');
var price = document.getElementById('price').innerHTML;
var quantity = document.getElementById('q1');
var total = 0;
var counter = 1;

plus.addEventListener('click', function(){
      if(counter < 6 && counter > 0){
        document.getElementById('dec').style = "background-color: rgb(223, 223, 223);";
        document.getElementById('inc').style = "background-color: rgb(223, 223, 223);";
        counter = counter + 1;
        quantity.value = counter;
        total = price*counter;
        document.getElementById('t1').value = total;
      }
      if(counter >= 6){
        counter = 6;
        document.getElementById('inc').style = "background-color: rgb(143, 143, 143);";
      }
      
    })


minus.addEventListener('click', function(){
  if(counter <= 6 && counter >= 1){
    document.getElementById('inc').style = "background-color: rgb(223, 223, 223);";
    document.getElementById('dec').style = "background-color: rgb(223, 223, 223);";
    counter = counter - 1;
    quantity.value = counter;  
    total = price*counter;
    document.getElementById('t1').value = total;
  }
  if(counter <= 1){
    counter = 1;
    quantity.value = counter;
    document.getElementById('dec').style = "background-color: rgb(143, 143, 143);";
  }
  
})


function setdt() {
  var date = new Date().toLocaleDateString();
  var time = new Date().toLocaleTimeString();
  document.getElementById("time").value = time;
  document.getElementById("date").value = date;
}
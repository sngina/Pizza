//create an object
function pizza(size ,topping,crust) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
};

//business logic
$(document).ready(function(){
 $("form").submit(function(event){ 
     event.preventDefault();
      
     var pSize = $("#size").val();
     var topping =$("#topping").val();
     var crust = $("#types").val();

     
     var newPizza = new pizza(pSize ,topping ,crust);
     total = 0;
     if (pSize=="small"){
       total+=500;
       
     } 
     else if(pSize=="medium"){
         total+=800;
     }
     else if(pSize=="large"){
         total+=1500;
     }
     else if(pSize=="elarge"){
         total+=2000;
     }


});
});

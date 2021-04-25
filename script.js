//create an object
function pizza(size, topping, crust, quantity, ttl) {
    this.size = size;
    this.topping = topping;
    this.crust = crust;
    this.quantity = quantity;
    this.ttl = ttl;
};
finalTotal = 0;

//business logic
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();

        var pSize = $("#size").val();
        var topping = $("#topping").val();
        var crust = $("#types").val();
        var number = parseInt($("#number").val());


        total = 0;
        if (pSize == "small") {
            total += 500;

        } else if (pSize == "medium") {
            total += 800;
        } else if (pSize == "large") {
            total += 1500;
        } else if (pSize == "elarge") {
            total += 2000;
        } else {
            alert("Please select the dropdown!")
        }


        if (topping == "beef") {
            total += 300;
        } else if (topping == "BBQ-chicken") {
            total += 400;
        } else if (topping == "bacon") {
            total += 200;
        } else if (topping == "ham") {
            total += 150;
        } else if (topping == "blue-cheese") {
            total += 400;
        } else if (topping == "others") {
            total += 300;
        } else {
            alert("Please add topping!")

        }

        if (crust == "crusty" || crust == "flatbread" || crust == "cheese" || crust == "thincrust" || crust == "Sicilian" || crust == "gluten free") {
            total += 150;
        } else {
            alert("chose a crust!")
            
        }
        total = total * number;
        var newPizza = new pizza(pSize, topping, crust, number, total);
        finalTotal += total
        $("#total").prepend("<tr><td>" + newPizza.size + "</td><td>" + newPizza.crust + "</td><td>" + newPizza.topping + "</td><td>" + newPizza.quantity + "</td><td>" + newPizza.ttl + "</td></tr>")
        $(".ttlCheck").text(finalTotal);
    });
});
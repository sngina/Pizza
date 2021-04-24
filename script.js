//business logic
function size(extra , large , medium , small) {
    this.elarge = elarge;
    this.large = large;
    this.medium = medium;
    this.small = small
};

//delivery option getting a prompt to add your address.
$(document).ready(function(){
    $("#deliver").click(function(event){
    event.preventDefault();
    
    });
    prompt("Please add your address")
    alert("Thank you!Oder received!")
});
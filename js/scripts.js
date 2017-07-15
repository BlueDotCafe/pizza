function Pizzaorder(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

Pizzaorder.prototype.cost = function() {
  var cost = 0;
  if (this.size === "m")  {
    cost = 10;
  } else if (this.size === "l") {
    cost = 12;
  } else {
    cost = 16;
  }
  $("input:checkbox[name=toppings]:checked").each(function() {
      cost = parseInt(cost) + parseInt($(this).val());
    });
  return cost;
};


$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    var toppings = $("#toppings").val();
    var myPizzaOrder = new Pizzaorder(size, toppings);
    var cost = myPizzaOrder.cost();
    $("#price").text("$" + cost);
    $(".show-pizza").show();
  });
});

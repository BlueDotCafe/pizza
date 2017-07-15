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
  return cost;
};











$(document).ready(function() {
  $("#pizza-form").submit(function(event) {
    event.preventDefault();
    var size = $("select#size").val();
    alert(size);

  });
});

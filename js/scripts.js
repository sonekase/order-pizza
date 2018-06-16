// business interface
function PizzaOrder (name, phone, option, address, size, meats, vegetables) {
  this.orderName = name;
  this.orderPhone = phone;
  this.orderOption = option;
  this.orderAddress = address;
  this.size = size;
  this.meats = meats;
  this.vegetables = vegetables;
  this.price = 0;
}

PizzaOrder.prototype.calculateCost = function(){
  if(this.size === "large") {
    this.price = 25 + this.meats.length * 3 + this.vegetables.length * 2;
  } else {
    this.price = 30 + this.meats.length * 4 + this.vegetables.length * 3;
  };
};

// user interface
$(document).ready(function(){
  $("button#scroll").click(function(){
  $('html, body').animate({scrollTop:$(document).height()
  }, 'slow');
  });

  $(".clickable").click(function() {
    $("#order-block").toggle();
    $(".hide-area").toggle();
});

  $("#order-area").submit(function(event){
    event.preventDefault();
    var orderName = $("input#order-name").val();
    var orderPhone = $("input#order-phone").val();
    var orderOption = $("input:radio[name=order-option]:checked").val();
    var orderAddress = $("input#order-address").val();
    var pizzaSize = $("input:radio[name=size-option]:checked").val();

    var meatsToppings = []; $("input:checkbox[name=meats-topping]:checked").each(function(){
       meatsToppings.push($(this).val());
     });

    var vegetablesToppings = []; $("input:checkbox[name=vegetables-topping]:checked").each(function(){
      vegetablesToppings.push($(this).val());
    });

  // what user interface sends to constructor (business logic)
    var newPizza = new PizzaOrder(orderName, orderPhone, orderOption, orderAddress, pizzaSize, meatsToppings, vegetablesToppings);
    newPizza.calculateCost();

  // output area
    $('#order-summary').append('<li><span class="pizza-order">' + newPizza.size + ":" + " " + "for" + " " + orderName + ":" + " " + orderOption + ":" + " " + orderAddress + "" + "" + " " + meatsToppings + " " + vegetablesToppings + '</span></li>');

    $('#order-cost').text("Total" +  ":" + " " + "$" + newPizza.price);

    $("#order-area").trigger('reset');

  });

});

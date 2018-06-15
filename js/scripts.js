// business interface
function PizzaOrder (name, phone, size, meats, vegetables) {
  this.orderName = name;
  this.orderPhone = phone;
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

  $("#order-area").submit(function(event){
    event.preventDefault();
    var orderName = $("input#order-name").val();
    var orderPhone = $("input#order-phone").val();
    var pizzaSize = $("input:radio[name=size-option]:checked").val();

    var meatsToppings = []; $("input:checkbox[name=meats-topping]:checked").each(function(){
       meatsToppings.push($(this).val());
     });

    var vegetablesToppings = []; $("input:checkbox[name=vegetables-topping]:checked").each(function(){
      vegetablesToppings.push($(this).val());
    });

    var newPizza = new PizzaOrder(orderName, orderPhone, pizzaSize, meatsToppings, vegetablesToppings);
    newPizza.calculateCost();

    $('#order-summary').append('<li><span class="pizza-order">' + newPizza.size + '</span></li>');

    $('#order-cost').text(newPizza.price);








   //  $("#order-summary").show();
   // $("input:checkbox[name=vegetables-topping]:checked").each(function(){
   //    var veggieToppings = $(this).val();
   //    $("#order-summary").append(veggieTopping + "<br>");
   //  });




  });








});

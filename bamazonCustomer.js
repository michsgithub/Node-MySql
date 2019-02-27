var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the showProducts function after the connection is made to prompt the user
  showProducts();
});

// showProducts function to display all products in db
function showProducts() {
  connection.query ("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
          console.log("Item #: " + res[i].item_id + "       " + 
                      "Product: " + res[i].product_name + "       " + 
                      "Department: " + res[i].department_name + "       " + 
                      "Price: " + "$" + res[i].price + "       " +
                      "Inventory: " + res[i].stock_quantity);
      }
      // runs the buyProduct function to prompt user
      buyProduct();
  });
};

// function which prompt user to enter item ID and quantity
var buyProduct = function() {
  inquirer.prompt([{
  name: "itemId",
  type: "input",
  message: "Enter Item ID:"
}, {
  name: "quantity",
  type: "input",
  message: "How many units would you like to buy?"
}]).then(function(answer) {
 
//query the database for all the products  
connection.query("SELECT * FROM products", function(err, res) {
  if (err) throw err;
      // set variable to get item ID input
      var itemIDInput;
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_id === parseInt(answer.itemId)) {
          itemIDInput = res[i];
        }
      }
      // if input item has > stock_quantity
      if (itemIDInput.stock_quantity > parseInt(answer.quantity)) {
        connection.query( // update products table
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: (itemIDInput.stock_quantity - parseInt(answer.quantity))
            },
            {
              item_id: itemIDInput.item_id
            }
          ],
          function(error) {
            if (error) throw error;
              console.log("Total is: " + "$" + parseInt(answer.quantity) * itemIDInput.price);
          }
        );
      }
      else {
        console.log("Not enough inventory.");
      }
    });
});
};

// var addInventory = function() {
//   inquirer.prompt([{
//   name: "inventory",
//   type: "input",
//   message: "Do you have inventory to add?"
// }]).then(function(answer) {

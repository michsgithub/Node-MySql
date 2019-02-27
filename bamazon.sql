DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Shirt", "Apparels", 10.50, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dress", "Apparels", 100.50, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Trousers", "Apparels", 18.20, 9);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cooker", "Appliances", 150.50, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Appliances", 50.07, 2);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee Maker", "Appliances", 230.10, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lipstick", "Cosmetics", 10.30, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blush", "Cosmetics", 9.50, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Moisturizer", "Cosmetics", 100.50, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sun Screen", "Cosmetics", 17.50, 3);
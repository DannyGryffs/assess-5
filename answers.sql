Part 1:
Problem 1: SELECT email FROM customers ORDER BY email;

problem 2: SELECT id FROM orders WHERE customer_id IN (SELECT id FROM customers WHERE fname = 'Elizabeth' AND lname = 'Crocker');

problem 3: SELECT SUM(num_cupcakes) FROM orders WHERE processed = false;

problem 4: SELECT cupcakes.name, SUM(orders.num_cupcakes) FROM cupcakes LEFT JOIN orders ON cupcakes.id = orders.cupcake_id GROUP BY name ORDER BY name;

problem 6: SELECT fname, lname, email FROM customers JOIN orders ON orders.customer_id = customers.id join cupcakes ON orders.cupcake_id  = (SELECT id FROM  
cupcakes WHERE name = 'funfetti') WHERE processed = true GROUP BY customers.id;
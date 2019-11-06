# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

`SELECT p.ProductId, p.ProductName, CategoryName FROM Products AS p LEFT Join Categories AS c ON p.CategoryId = c.CategoryId`

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

`SELECT o.OrderId, s.ShipperName FROM Orders AS o JOIN Shippers AS s ON o.ShipperId = s.ShipperId WHERE OrderDate < '1997-01-09'`

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```
FROM Orders AS a
JOIN OrderDetails AS b ON a.OrderId = b.OrderId
JOIN Products AS p ON p.ProductId = b.ProductId
WHERE a.OrderId = 10251
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```
SELECT O.OrderId, C.CustomerName, E.LastName
FROM Orders as O
JOIN Customers as C on C.CustomerId = O.CustomerId
JOIN Employees as E on E.EmployeeId = O.EmployeeId
```

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

```
SELECT C.CategoryName, COUNT(P.ProductName) as NumberOfProducts
FROM Products as P
Join Categories as C on P.CategoryId = C.CategoryId
GROUP BY C.CategoryName
```

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

```
SELECT Orders.OrderId, SUM(O.quantity) AS NumberOfOrders
FROM Orders
JOIN OrderDetails AS O ON O.OrderId = Orders.OrderId
GROUP BY O.OrderId
```

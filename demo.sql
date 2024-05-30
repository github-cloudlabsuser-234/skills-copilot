-- Create a table for 5 products with product names and prices
CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

-- Insert 5 rows into the table
INSERT INTO products (product_name, price) VALUES
    ('Apple iPhone 11', 999.99),
    ('Samsung Galaxy S20', 899.99),
    ('Google Pixel 4', 799.99),
    ('OnePlus 7T', 699.99),
    ('Huawei P30 Pro', 599.99);

-- Path: demo.sql
-- Create a table for 3 customers with customer names and emails
CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    customer_name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL
);

-- Insert 3 rows into the table
INSERT INTO customers (customer_name, email) VALUES
    ('Alice', '
INSERT INTO users (first_name, last_name, email, password, admin)
VALUES ('Sarah', 'Rosenkranz', 'rosiesfinds@outlook.com', 'Welcome1', TRUE);

INSERT INTO items (name, price, status, description, image, quantity, user_id)
VALUES ('blue vase', 20, 'available', '12" x 20"', 'www.wbtly.ca/s/LmXXzF', 1, 1),
('mirror', 45, 'available', '24" x 40"', 'www.wbtly.ca/s/dpvjxL', 1, 1),
('foxy after coffee mug', 5, 'available', 'cute mug', 'www.wbtly.ca/s/PU7ZOt', 4, 1);

INSERT INTO shipping (name, description, cost)
VALUES ('Nationwide', 'Anywhere in Canada', 22),
('Local', 'Edmonton area', 10),
('Pick up', 'From Central West Edmonton', 0);

INSERT INTO promotions (name, discount_percent, active)
VALUES ('Thrifty', 10, TRUE);


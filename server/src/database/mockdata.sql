INSERT INTO carousel (
    title,
    image
) VALUES 
(
    'Kechalari sokin dam oling',
    'https://picsum.photos/400'
),
(
    'Nimadir nimadir nimadir nimadir',
    'https://picsum.photos/400'
);

INSERT INTO statistics (
    experience,
    clients,
    warranty,
    delivery
) VALUES ( 7, '10K+', 10, 3 );

INSERT INTO orders (
    name,
    number,
    product_name,
    count
) VALUES 
('Imron Shoimov', '973332332', 'Ortopedik Eko matras', 4);

INSERT INTO user (
    username,
    password
) VALUES ( 'admin', crypt('admin', gen_salt('bf')) );
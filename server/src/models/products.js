const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_PRODUCTS = `
SELECT * FROM products
WHERE is_active = '1';
`;

const UPDATE_ISACTIVE = `
UPDATE products
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

const INSERT_PRODUCTS = `
INSERT INTO products (
    category_id,
    name,
    category,
    product_images,
    weight,
    warranty,
    size,
    capacity,
    body,
    cost,
    new_cost,
    status
) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12 )
RETURNING id;
`;

const SELECT_IMAGES = `
SELECT 
    product_images
FROM products
WHERE id = $1;
`;

const UPDATE_PRODUCTS = `
UPDATE products
SET name = $1,
    product_images = $2,
    weight = $3,
    warranty = $4,
    size = $5,
    capacity = $6,
    body = $7,
    cost = $8,
    new_cost = $9,
    status = $10
WHERE id = $11
RETURNING id;
`;

exports.getProducts = () => fetchAll(SELECT_PRODUCTS);
exports.updateIsActive = (id) => fetch(UPDATE_ISACTIVE, id);
exports.insertProduct = (id, data, files, status) => fetch(
    INSERT_PRODUCTS,
    id,
    data.name,
    data.category,
    files,
    data.weight,
    data.warranty,
    data.size,
    data.capacity,
    data.body,
    data.cost,
    data.newCost,
    status
);
exports.selectImages = (id) => fetch(SELECT_IMAGES, id);
exports.updateProducts = (id, data, files, status) => fetch(
    UPDATE_PRODUCTS, 
    data.name,
    files,
    data.weight,
    data.warranty,
    data.size,
    data.capacity,
    data.body,
    data.cost,
    data.newCost,
    status,
    id
);
exports.deleteProducts = (id) => fetch(UPDATE_ISACTIVE, id);
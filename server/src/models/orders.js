const { fetch, fetchAll } = require("../lib/connectdb");

const GET_COUNT = `
SELECT 
    COUNT(id) as count
FROM orders
WHERE is_active = '1';
`;

const SELECT_ORDERS = `
SELECT 
    id,
    name,
    '+998' || number as number,
    product_name,
    count
FROM orders
WHERE is_active = '1'
LIMIT $1 OFFSET $2;
`;

const INSERT_ORDERS = `
INSERT INTO orders (
    name,
    number,
    product_name,
    count
) VALUES ( $1, $2, $3, $4 )
RETURNING id;
`;

const UPDATE_ORDERS = `
UPDATE orders
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

const SEARCH_ORDER = `
SELECT 
    id,
    name,
    '+998' || number as number,
    product_name,
    count
FROM orders
WHERE is_active = '1' AND
name ILIKE '%' || $1 || '%' OR number ILIKE '%' || $1 || '%';
`;

exports.getCount = () => fetch(GET_COUNT);
exports.getOrders = (limit, page) => fetchAll(SELECT_ORDERS, limit, page);
exports.insertOrders = (data) => fetch(
    INSERT_ORDERS, 
    data.name,
    data.number,
    data.productName,
    data.count
);
exports.updateOrders = (id) => fetch(UPDATE_ORDERS, id);
exports.searchOrder = (data) => fetch(SEARCH_ORDER, data);
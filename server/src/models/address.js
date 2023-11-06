const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_ADDRESS = `
SELECT 
    id,
    location,
    destination,
    geolacation,
    images
FROM address
WHERE is_active = '1';
`;

const INSERT_ADDRESS = `
INSERT INTO address (
    location,
    destination,
    geolacation,
    images,
    is_active
) VALUES ( $1, $2, $3, $4, $5 )
RETURNING id;
`;

const UPDATE_ADDRESS = `
UPDATE address
SET location = $1,
    destination = $2,
    geolacation = $3,
    images = $4,
    is_active = $5
WHERE id = $6
RETURNING id;
`;

const DELETE_ADDRESS = `
UPDATE address
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

const SELECT_IMAGE = `
SELECT 
    images
FROM address
WHERE id = $1;
`;

exports.getAddress = () => fetchAll(SELECT_ADDRESS);
exports.insertAddress = (data, files) => fetch(
    INSERT_ADDRESS,
    data.location,
    data.destination,
    data.geolocation,
    files,
    data.isActive
);
exports.selectImages = (id) => fetch(SELECT_IMAGE, id);
exports.updateAddress = (id, data, files) => fetch(
    UPDATE_ADDRESS,
    data.location,
    data.destination,
    data.geolocation,
    files,
    data.isActive,
    id
);
exports.deleteAddress = (id) => fetch(DELETE_ADDRESS, id);
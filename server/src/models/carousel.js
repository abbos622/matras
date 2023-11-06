const { fetch, fetchAll } = require("../lib/connectdb");

const GET_CAROUSEL = `
SELECT 
    *
FROM carousel 
WHERE is_active = '1';
`

const COUNTS = `SELECT COUNT(id) FROM carousel WHERE is_active = '1';`;

const INSERT_CAROUSEL = `
INSERT INTO carousel (
    title,
    image
) VALUES ( $1, $2 )
RETURNING id;
`;

const UPDATE_CAROUSEL = `
UPDATE carousel
SET title = $1,
    image = $2
WHERE id = $3
RETURNING id;
`;

const DELETE_CAROUSEL = `
UPDATE carousel
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

const SELECT_IMAGE = `
SELECT 
    image
FROM carousel
WHERE id = $1;
`;

exports.getCarousel = () => fetchAll(GET_CAROUSEL);
exports.counts= () => fetch(COUNTS);
exports.insertCarousel = (title, image) => fetch(INSERT_CAROUSEL, title, image );
exports.updateCarousel = (id, title, image) => fetch(UPDATE_CAROUSEL, title, image, id);
exports.selectImage = (id) => fetch(SELECT_IMAGE, id);
exports.deleteCarousel = (id) => fetch(DELETE_CAROUSEL, id);
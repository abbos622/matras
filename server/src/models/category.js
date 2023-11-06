const  { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_CATEGORY = `
SELECT 
    id,
    category,
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time,
    is_active
FROM categories
WHERE is_active = '1';`;

const INSERT_CATEGORY = `
INSERT INTO categories (
    category
) VALUES ($1)
RETURNING id;
`;

const IS_ACTIVE = `
UPDATE categories
SET is_active = '0'
WHERE id = $1;
`;

const ACTIVE = `
UPDATE categories
SET is_active = '1'
WHERE id = $1;
`;

const UPDATE_CATEGORY = `
UPDATE categories
SET category = $1
WHERE id = $2
RETURNING id;
`;
const DELETE_CATEGORY = `
UPDATE categories
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

exports.getCategories = () => fetchAll(SELECT_CATEGORY);
exports.insertCategory = (category) => fetch(INSERT_CATEGORY, category);
exports.updateIsActive = (id) => fetch(IS_ACTIVE, id);
exports.updateCategory = (id, { category }) => fetch(UPDATE_CATEGORY, category, id);
exports.active = (id) => fetch(ACTIVE, id);
exports.deleteCategory = (id) => fetch(DELETE_CATEGORY, id);


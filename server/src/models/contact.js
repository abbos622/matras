const { fetch, fetchAll } = require("../lib/connectdb");

const GET_COUNT = `
SELECT 
    COUNT(id) as count
FROM contact
WHERE is_active = '1';
`;

const SELECT_CONTACT = `
SELECT 
    id,
    '+998' || number as number, 
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time,
    contacted
FROM contact
WHERE is_active = '1'
ORDER BY contacted DESC
LIMIT $1 OFFSET $2;
`;

const INSERT_CONTACT = `
INSERT INTO contact (
    number
) VALUES ($1)
RETURNING id;
`;

const CONTACTED = `
UPDATE contact
SET contacted = '1'
WHERE id = $1
RETURNING id;
`;

const DELETE_CONTACT = `
UPDATE contact 
SET is_active = '0'
WHERE id = $1
RETURNING id;
`

const SEARCH_CONTACT = `
SELECT 
    id,
    '+998' || number as number, 
    TO_CHAR(time, 'yyyy-MM-dd HH24:MI:SS') as time,
    contacted
FROM contact
WHERE is_active = '1' AND
number ILIKE '%' || $1 || '%';
`;

exports.getCount = () => fetch(GET_COUNT);
exports.getContacts = (limit, page) => fetchAll(SELECT_CONTACT, limit, page);
exports.insertContact = ({ number }) => fetch(INSERT_CONTACT, number);
exports.contacted = (id) => fetch(CONTACTED, id);
exports.deleteContact = (id) => fetch(DELETE_CONTACT, id);
exports.searchContact = (data) => fetch(SEARCH_CONTACT, data);
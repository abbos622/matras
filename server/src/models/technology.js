const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_TECHNOLOGIES = `
SELECT 
    id,
    name,
    thumbnail,
    link,
    description 
FROM technologies
WHERE is_active = '1';
`;

const INSERT_TECHNOLOGY = `
INSERT INTO technologies (
    name,
    thumbnail,
    link,
    description
) VALUES ( $1, $2, $3, $4 )
RETURNING id;
`;

const UPDATE_TECHNOLOGY = `
UPDATE technologies
SET name = $1,
    thumbnail = $2,
    link = $3,
    description = $4,
    is_active = $5
WHERE id = $6
RETURNING id;
`;

const IS_ACTIVE = `
UPDATE technologies
SET is_active = '0'
WHERE id = $1
RETURNING id;
`;

exports.getTechnologies = () => fetchAll(SELECT_TECHNOLOGIES);
exports.isActive = (id) => fetch(IS_ACTIVE, id);
exports.insertTechnology = (data) => fetch(
    INSERT_TECHNOLOGY, 
    data.name, 
    data.thumbnail, 
    data.link, 
    data.description
);
exports.updateTechnology = (id, data) => fetch(
    UPDATE_TECHNOLOGY,
    data.name, 
    data.thumbnail, 
    data.link, 
    data.description,
    data.isActive,
    id
);
exports.deleteTechnology = (id) => fetch(IS_ACTIVE, id);
const { fetch, fetchAll } = require("../lib/connectdb");

const SELECT_STATISTICS = `
SELECT 
    experience,
    clients,
    warranty,
    delivery
FROM statistics
WHERE is_active = '1';
`;

// const INSERT_STATISTICS = `
// INSERT INTO statistics (
//     experience,
//     clients,
//     warranty,
//     delivery
// ) VALUES ( $1, $2, $3, $4 )
// RETURNING true;
// `;

const UPDATE_STATISTICS = `
UPDATE statistics 
SET experience = $1,
    clients = $2,
    warranty = $3,
    delivery = $4
RETURNING true;
`

// const DELETE_STATISTICS = `
// UPDATE statistics
// SET is_active = '0'
// RETURNING true;
// `;

exports.getStatistics = () => fetch(SELECT_STATISTICS);
// exports.insertStatistics = (data) => fetch(
//     INSERT_STATISTICS, 
//     data.experience, 
//     data.clients, 
//     data.warranty, 
//     data.delivery
// );
exports.updateStatistics = (data) => fetch(
    UPDATE_STATISTICS,
    data.experience, 
    data.clients, 
    data.warranty, 
    data.delivery
);
// exports.deleteStatistics = () => fetch(DELETE_STATISTICS);
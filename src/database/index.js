const db = require("./database/connection");

async function insert(table, data) {
	const columns = Object.keys(data).join(', ');
	const values = Object.values(data);
	const indexes = values.map((value, index) => `$${index + 1}`).join(', ')

	await db.query(
		`INSERT INTO products (${columns}) VALUES (${indexes})`,
		values
	);
}
async function find() {}

module.exports = {
    insert,
    find,
}
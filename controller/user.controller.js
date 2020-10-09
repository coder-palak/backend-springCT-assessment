const db = require('../lib/db.connection');


async function get(req, res) {
    try {
        const result = await db.any(`SELECT *,a."name" as userName, "com"."name",com."id" as companyId FROM "spring-ct"."users" a JOIN "spring-ct"."company" com ON a."id" = com."user_id"`);
        return res.status(200).json(result); 0
    } catch (error) {
        return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Something went wrong' });
    }
}

async function getUserLis(req, res) {
    try {
        const result = await db.any(`SELECT * FROM "spring-ct"."users"`);
        return res.status(200).json(result)
    } catch (error) {
        return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Something went wrong' });
    }

}




module.exports = {
    get,getUserLis
}
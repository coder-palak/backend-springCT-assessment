const db = require('../lib/db.connection');

async function add(req, res) {
    try {
        const result = await db.none(`UPDATE "spring-ct"."company" SET user_id = $1 WHERE id= $2`, [req.body.userId, req.body.companyId]);
        return res.status(200).json({message : 'User Assign successfuly'})
    } catch (error) {
        return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Something went wrong' });
    }

}

async function get(req, res) {
    try {
        const result = await db.any(`SELECT * FROM "spring-ct"."company"`);
        return res.status(200).json(result)
    } catch (error) {
        return res.status(error.status ? error.status : 500).json({ message: error.message ? error.message : 'Something went wrong' });
    }

}


module.exports = {
    add,get
}
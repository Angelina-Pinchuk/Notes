import pool from './db.js'
class User{
    constructor() {
    }
    addUser = async (req, res) => {
        console.log("Пришли данные:", req.body);
        const { name, email, password } = req.body;
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password];

        try {
            const result = await pool.query(query, values);
            res.status(200).json(result.rows[0]);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

     existUser = async (req, res) => {
        const { email} = req.body;
        const query = 'SELECT email, password FROM users WHERE users.email = $1;';
        const values = [email];

        try {
            const result = await pool.query(query, values);
            res.json(result);
        } catch(error) {
            res.status(500).json({ error: error.message });
        }
    }
}
export default new User();
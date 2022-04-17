import jwt from 'jsonwebtoken';

const KEY = 'test';

export default function handler(req, res) {
    if(!req.body) {
        res.statusCode = 404;
        res.end('Error');
        return;
    }
    
    const { username, password } = req.body;
    console.log(username)
    console.log(password)

    res.json({
        token: jwt.sign({
            username
        }, KEY)
    })
}
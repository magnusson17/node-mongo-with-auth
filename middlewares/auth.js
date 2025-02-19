import jwt from "jsonwebtoken"

export const middlewareAuth = (req, res, next) => {
    const authHeaders = req.headers['authorization']
    const token = authHeaders && authHeaders.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) return res.sendStatus(403)
        req.user = user
        next()
    })
}
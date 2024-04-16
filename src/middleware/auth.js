import jwt from "jsonwebtoken";

const authUser = (res, req, next) => {
    console.log(req)
    const token = req.headers.Authorization;
    console.log(token)
    if(!token){
        return res.status(401).json({message: 'authorization is missing'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).json({message: 'authorization is missing'})
        }

        findUser.id = decoded.user_id

        return next()

    })
}

export default authUser
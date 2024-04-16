const validateData = (schema) => {
    return (res, req, next) => {

        const {error} = schema.validate(req.body)

        if(error) {
            return res.status(400).json({message: 'bad data'})
        } else {
            return next()
        }

    }
}

export default validateData
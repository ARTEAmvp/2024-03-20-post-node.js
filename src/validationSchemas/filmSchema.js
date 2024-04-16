import Joi from "joi"

const filmSchema = Joi.object({
    title: Joi.string().required,
    rating: Joi.number().required,
    description: Joi.string().required,
    imdbLink: Joi.string()
})

export default filmSchema
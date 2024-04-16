import { v4 as uuidv4 } from 'uuid';
import user from '../models/user.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const NEW_USER = async (req, res) => {
  try{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new user ({
      id: uuidv4(),
      full_name: req.body.full_name,
      email: req.body.email,
      password: hash
    });

    const response = await newUser.save()

    return res.status(201).json({newUser: newUser, message: 'User was created successfully'});

  }catch(err){
    console.log(`handled error`, err)
    return res.status(404).json({message: `error happened`})
  }

  }

  const LOGIN = async (req, res) => {
    try{
  
      const findUser = await user.findOne({email: req.body.email})
      if(!findUser) {
        return res.status(500).json({message: 'user data input is wrong'})
      }

      const isPasswordMatch = bcrypt.compareSync(
        req.body.password,
        findUser.password
      )

      if(!isPasswordMatch){
        return res.status(500).json({message: 'user data input is wrong'})
      }

      const jwt_token = jwt.sign(
        {email: findUser.email, user_id: findUser.id},
        process.env.JWT_SECRET,
        {
          expiresIn: '2h'
        }
      )
      console.log(jwt_token)

      return res.status(200).json({jwt: jwt_token, message: 'user logged in'})
  
    }catch(err){
      console.log(`handled error`, err)
      return res.status(500).json({message: `error happened`})
    }
  
    }

  export {NEW_USER, LOGIN}
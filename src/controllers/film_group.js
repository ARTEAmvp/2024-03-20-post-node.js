import mongoose, { ObjectId } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import FilmGroup from "../models/film_group.js";


const NEW_FILM_GROUP = async (req, res) => {
  try{
    const group = new FilmGroup({
      id: uuidv4(),
      title: req.body.title,
      userEmail: req.body.userEmail,
      likedMovies: req.body.likedMovies,
      films_ids: []
    });

    const response = await group.save()

    return res.status(201).json('Film group was created successfully');

  }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }

  }


const GET_ALL_FILM_GROUPS = async (req, res) => {
  try{
    const films = await FilmGroup.aggregate([{
      $lookup: {
        from: "films",
        localField: "films_ids",
        foreignField: "id",
        as: "films"
      }
    },
    {$match: {id : new mongoose.Types.ObjectId(req.params._id)}}
  ]).exec()

    res.status(200).json({films: films})
    }catch(err){
      console.log(`handled error`, err)
      return res.status(500).json({message: `error happened`})
    }
}

  export {NEW_FILM_GROUP, GET_ALL_FILM_GROUPS}
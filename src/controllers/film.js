import { v4 as uuidv4 } from 'uuid';
import FilmModel from "../models/index.js"
import FilmGroup from "../models/film_group.js"


const NEW_FILM = async (req, res) => {
  try{

    const newFilm = new FilmModel ({
      id: uuidv4(),
      ...req.body
    });

    const response = await newFilm.save()

    // await FilmGroup.findByIdAndUpdate(req.params.groupId, {
    //   $push : {films_ids: newFilm.id}
    // })

    return res.status(201).json('Film was added successfully');

  }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }

  }


const GET_FILM_BY_ID = async (req, res) => {

  try{
  
  const film = await FilmModel.findById(req.params.id)

  return res.status(200).json({film: film})
  }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }
}

const GET_FILMS = async (req, res) => {
  try{
  const films = await FilmModel.find({userId: req.body.userId}).sort(1)
  res.status(200).json({films: films})
  }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }
}

const GET_FILMS_SORTED = (req, res) => {
    if(films.length === 0) {
        res.status(200).json({status: `Data does not exist`})
    } else {
        const sortedFilms = films.slice().sort((a, b) => b.rating - a.rating);
        res.json(sortedFilms);
    }
}

const DELETE_FILMS = (req, res) => {
    films.length = 0;
    res.json({ message: 'All films have been deleted successfully' });
  }

  const DELETE_FILMS_BY_ID = async (res, req) => {
    try{
      const film = await FilmModel.findByIdAndDelete(req.params.id)

      if(!film) {
        return res.status(404).json({message: `film with such id does not exist`})
      }
      return res.status(200).json({message: `film with the id ${req.params.id} was deleted`})
    }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }
  }

  const UPDATE_FILM_BY_ID = async (req, res) => {
    try {
      const film = await FilmModel.updateOne({_id: req.params.id}, {...req.body})
      return res.status(200).json({message: `film with the id ${req.params.id} was updated`, film: film})
    }catch(err){
    console.log(`handled error`, err)
    return res.status(500).json({message: `error happened`})
  }
  }

  export {NEW_FILM, GET_FILMS, GET_FILMS_SORTED, GET_FILM_BY_ID, DELETE_FILMS, DELETE_FILMS_BY_ID, UPDATE_FILM_BY_ID}
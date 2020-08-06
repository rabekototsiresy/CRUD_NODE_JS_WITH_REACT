const router = require('express').Router();
const Music = require('../models/music.model');
const { response } = require('express');


// read data
router.get('/musics',async(req,res)=>{
   const musics = await Music.findAll();
   if(musics){
     res.status(200).send({musics,status:'success'})
   }else{
     res.status(4000).send({message: 'erreur de recuperation',status: 'erreur'})
   }
})

// read one data
router.get('/music/:id',async(req,res)=>{
  const id = req.params.id;
  const music = await Music.findOne({where: {id: id}});
  if(music){
    res.status(200).send({music,status:'success'})
  }else{
    res.status(4000).send({message: 'erreur de recuperation',status: 'erreur'})
  }
})



// create data
router.post('/music',require('../middlewares/validation.music.middleware'),async (req,res)=>{
  const music = req.body

  const musicCreated = await Music.create(music)
  if(musicCreated){
    res.status(200).send({music: musicCreated,status: 'success'})
  }else{
    res.status(400).send({message: 'erreur de sauvegarde',status: 'erreur'})
  }
})

// update data

router.put('/music/:id',require('../middlewares/validation.music.middleware'),(req,res)=>{
  const id = req.params.id;
  
  const music = req.body;
  const numOfUpdated = Music.update(music,{where:{id: id} })
  if(numOfUpdated){
    res.status(200).send({message: 'donné mij a jour',status: 'success'})
  }else{
    res.send({message: 'une erreur est survenue lors de la mis a jour',status: 'erreur'})
  }
})

// delte data
router.delete('/music/:id',async (req,res)=>{
  const id = req.params.id;
  const numOfDeleted = await Music.destroy({where: {id: id }})
  if(numOfDeleted){
    res.status(200).send({ numOfDeleted,message: 'suppression avec succés',status: 'success'})
  }else{
    res.status(400).send({message: 'une erreur est survenue lors de la supresssion'})
  }
})



module.exports = router;
const validation_music_middleware = (req,res,next)=>{
  const { title,description } = req.body
  if(!title && !description){
    res.status(400).send({message: 'les champs ne doit pas etre vide',status: 'erreur'})
  }
  if(!title){
    res.status({message: 'champ title vide',status: 'erreur'})
  }
  if(!description){
    res.status({message: 'champ description vide',status: 'erreur'})
  }
  next()
}

module.exports = validation_music_middleware;
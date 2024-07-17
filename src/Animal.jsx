const Animal = ({ animalType, imgPath, description, setAnimalList }) => {

  return (
    <>
      <h2>{animalType}</h2>

      <img src={imgPath} />
      <p>{description}</p>

      <button onClick={() => {
        setAnimalList([
          { 
            id: 7, 
            type: 'panda',
            imagePath: '',
            description: 'Balck and white floof'
          }
        ])
      }}>Update List</button>
    </>
  )
}

export default Animal;
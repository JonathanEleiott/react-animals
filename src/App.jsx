import { useState } from 'react';
import Animal from './Animal.jsx';
import bunnyImg from './images/bunnyWithCorn.jpeg';
import chickenImg from './images/wandasHotwings.jpeg';
import tigerImg from './images/tonyTheTiger.jpeg';
import hippoImg from './images/funHippo.jpeg';
import chimpanzeeImg from './images/babyChimp.jpeg';
import fluffyBunny from './images/fluffyBunny.jpeg';


const App = () => {
  const [animalList, setAnimalList] = useState([
    {
      id: 1,
      type: `bunny`,
      imagePath: bunnyImg,
      description: `Bunnies are cute`
    },
    {
      id: 2,
      type: `chicken`,
      imagePath: chickenImg,
      description: `Bawk bawk`
    },
    {
      id: 3,
      type: `tiger`,
      imagePath: tigerImg,
      description: `Meow Roar`
    },
    {
      id: 4,
      type: `hippo`,
      imagePath: hippoImg,
      description: `Scary blob`
    },
    {
      id: 5,
      type: `chimpanzee`,
      imagePath: chimpanzeeImg,
      description: `ape not kill ape`
    },
    {
      id: 6,
      type: `bunny`,
      imagePath: fluffyBunny,
      description: `big floofer`
    }
  ]);
  
  return (
    <>
      <h1>React Animals</h1>

      {/* <Animal animalType='bunny' imgPath={bunnyImg} description='Bunnies are cute' />
      <Animal animalType='chicken' imgPath={chickenImg} description='Bawk bawk' />
      <Animal animalType='tiger' imgPath={tigerImg} description='Meow Roar' />
      <Animal animalType='hippo' imgPath={hippoImg} description='Scary blob' />
      <Animal animalType='chimpanzee' imgPath={chimpanzeeImg} description='ape not kill ape' /> */}

      {
        animalList.map((animal) => {
          return (
            <>
              { 
                // animal.type === 'bunny' ? 
                  <Animal 
                    setAnimalList={setAnimalList}
                    key={animal.id}
                    animalType={animal.type}
                    imgPath={animal.imagePath}
                    description={animal.description}
                  /> 
                  // : null
              }
            </>
          )
        })
      }
      
    </>
  )
}

export default App
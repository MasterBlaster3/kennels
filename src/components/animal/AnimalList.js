import React, { useState, useEffect } from 'react'; 
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';
import { useNavigate } from 'react-router-dom';

export const AnimalList = () => {
    //The initial state is an empty array[initial value of the state]
    //useState returns an array. The first element in the array is the current value of the state.
    //Remember the value of state can change over time, so the current value is probably not the same as the initial value.
    // The second element in the array is a function that gives us access to change the state.
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        //after the data comes back from the API, we
        //use the setAnimals function to update state
        return getAllAnimals().then((animalsFromAPI) => {
            setAnimals(animalsFromAPI);
        });
    };

  
//got the animals from the API on the component's first render
useEffect(() => {
    getAnimals();
}, []);

const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
};

//finally we use .map() to "loop over" the animals to show a list of animals cards
    return (
        <>
        <section className='section-content'>
            <button type="button"
                    className='btn'
                    onClick={() => {navigate("/animals/create")}}>
                    Admit Animal
                    </button>
        </section>
        <div className="container-cards">
        {animals.map((animal) =>(
            <AnimalCard key={animal.id}
            animal={animal}
            handleDeleteAnimal={handleDeleteAnimal}/>
        ))}
        </div>
    </>
    );
};

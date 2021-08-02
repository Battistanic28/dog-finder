import React from 'react';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';


function DogList(props) {
    const dogs = props.data.dogs;

    return (
        <div>
            {dogs.map(dog => (
                <Link key={uuid()} to={`/dogs/${dog.name}`}>
                <div>
                    <h3>{dog.name}</h3>            
                    <img 
                        src={`${dog.name}.jpg`} 
                        alt={dog.name}
                    ></img>
                </div>
                </Link>
            ))}
        </div>
    )
}

export default DogList;

import React from 'react';
import {useParams, Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';



function DogDetails(props) {
    const {name} = useParams();
    const data = props.data.dogs.filter(obj => {
        return obj.name === name;
    })
    const facts = data[0].facts;

    return(
        <div>
            <h1>{data[0].name}</h1>
            <img src={`/${data[0].name}.jpg`} alt={data[0].name}></img>
            <p>Age: {data[0].age}</p>
            <ul>
                {facts.map(fact => <li key={uuid()}>{fact}</li>)}
            </ul>
            <Link to={`/dogs`}>
                <button>Return home</button>
            </Link>
        </div>
    )
}

export default DogDetails;

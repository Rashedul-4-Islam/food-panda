import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import "./SingelFood.css"

const SingleFood = (props) => {
    const {id} = useParams();
    const [singelFood,setSingelFood] = useState([]);
    console.log(singelFood);
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => setSingelFood(data.meals[0]))
    },[])
    return (
        <div>
            <h4>Food Details</h4>
            <div className="singel-card">
            <Card className=" over" >
            <Card.Img className="image" variant="top" src={singelFood.strMealThumb} />
            <Card.Body>
                <Card.Title>{singelFood.strMeal}</Card.Title>
                <Card.Text>
                 Category: {singelFood.strCategory}
                </Card.Text>
                <Card.Text>
                 Area: {singelFood.strArea}
                </Card.Text>
                <Card.Text >
                Instruction : {singelFood.strInstructions}
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default SingleFood;
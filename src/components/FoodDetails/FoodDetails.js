import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./FoodDetails.css"
const FoodDetails = (props) => {
    const {strMeal,strMealThumb,strArea,idMeal} =props.food;
    // console.log(food)
    return (
        <div >
        
            <Card className="card-style" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strArea}
                    </Card.Text>
            <Link to={`/singleFood/${idMeal}`}
                 
            >
               <button className="details">Details</button>
            </Link>
              
            </Card.Body>
            </Card>
            
        </div>
    );
};

export default FoodDetails;
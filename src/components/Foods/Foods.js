import React, { useEffect, useState } from 'react';
import FoodDetails from '../FoodDetails/FoodDetails';
import { Form, FormControl } from 'react-bootstrap';
import "./Foods.css"
const Foods = (props) => {
    const [foods,setFoods] = useState([]);
    const [searchText,setSearchText] = useState("")
    const data = props;
    console.log(data);
    useEffect(() =>{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(res => res.json())
        .then(data => setFoods(data.meals))
    },[searchText]);
     const handleSearch = event =>{
            const data = event.target.value;
            setSearchText(data);
     }

    return (
        <div>
            <h4>We love foods</h4>
            <Form className="form-input">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={handleSearch}
                    />
            </Form>
           <div className="food-details">
           {
                foods?.map(food => <FoodDetails 
                     key = {food.idMeal}
                    food={food}></FoodDetails>)
            }
           </div>
        </div>
    );
};

export default Foods;
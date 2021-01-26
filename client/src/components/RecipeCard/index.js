import React, { useState, useEffect } from "react";
import "./style.css";
import ViewModal from "../ViewRecipeModal";
import API from "../../utils/API";

function RecipeCard(props) {
  const [rating, setRating] = useState();

  const getRating= () => {
    API.getRating(props._id)
      .then((res) => {
        console.log(props);
        setRating(res.data[0].avgRating);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getRating(props._id);
  }, []);

  return (
        <>
            <div className="card mb-3">
              <div className="row no-gutters">
                <div className="col-md-4">
                  <img className="m-3" src="/images/fruit.jpg" alt="..."></img>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title m-2">{props.recipes.title}</h5>
                    <h6 className="muted m-2">Current Rating: {rating}/5 stars</h6>
                    <h6 className="muted m-2">Type: {props.recipes.type}</h6>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h6 className="m-2">Categories:</h6>
                  <ul>
                    {props.recipes.categories && props.recipes.categories.map((category) => (
                      <li>{category}</li>
                    ))}
                  </ul>
                  <h6 className="m-2">Ingredients:</h6>
                  <ul>
                    {props.recipes.ingredients && props.recipes.ingredients.map((ingredient) => (
                      <li>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="col">
                  <h6>Preparation:</h6>
                  {props.recipes.prep}
                </div>
              </div>
              <div className="row m-2 clearfix">
                <ViewModal className="m-2 float-right"/>
              </div>
            </div>
        </>
  );
}

export default RecipeCard;
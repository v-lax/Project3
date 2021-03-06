import React, { useState } from "react";
import Header from "../components/Header";
import SearchRecipeCard from "../components/SearchRecipeCard";
import API from "../utils/API";

function SearchRecipe() {
  const [searchBar, setSearchBar] = useState([]);
  const [foundRecipes, setFoundRecipes] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    if (searchBar) {
      API.searchRecipes(searchBar)
        .then((res) => {
          setFoundRecipes(res.data);
          console.log(res.data);
        })
        .catch(err => console.log(err));
    }
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchBar(value);
  }

  return (
    <>
      <Header />
      <div className="row">
        <div className="col">
          <div className="container">
            <div className="row"></div>
            <div className="row shadow p-3 m-3 rounded list-border page-header">
              <div className="col-1"></div>
              <div className="col-10">
                <form className="login">
                  <div className="form-group">
                    <label htmlFor="searchRecipe"><h2><strong>Search for a Recipe</strong></h2></label>
                    <input type="text" className="form-control shadow p-3 m-3 bg-white rounded" id="recipe-search"
                      placeholder="Search Input" onChange={handleInputChange}></input>
                  </div>
                  <div className="row">
                    <div className="col-12 text-center clearfix">
                      <button type="submit" className="btn btn-dark active float-right" id="search-btn" onClick={handleSubmit}>Submit</button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-1"></div>
            </div>
            <div className="row shadow p-3 m-3 rounded list-border recipe-list">
              <div className="col-1"></div>
              <div className="col-10">
                { foundRecipes ? foundRecipes.map((recipe) => (
                  <SearchRecipeCard
                    key={recipe._id}
                    title={recipe.title}
                    categories={recipe.categories}
                    ingredients={recipe.ingredients}
                    prep={recipe.prep}
                    _id={recipe._id}
                  />
                )) :
                  <h3>Click Search to Find Your Next Juicy Smoothie!</h3>
                }
              </div>
              <div className="col-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default SearchRecipe;
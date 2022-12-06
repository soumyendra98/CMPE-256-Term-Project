import React, { useState, useEffect } from "react";
import List from "./List";
import Scroll from "./Scroll";
import Details from "./Details";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Search({ details }) {
  const [searchfield, setSearchfield] = useState("");
  const [searchType, setSearchTypes] = useState("NAME");
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/getAll`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setFilteredRecipes(res.data);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchfield(e.target.value);
    getSearchedRecipes();
  };

  const searchTypes = [
    { label: "Name", value: "NAME" },
    { label: "Ingredients", value: "INGREDIENTS" },
    { label: "Tags", value: "TAGS" },
  ];

  const handleSearchType = (e) => {
    setSearchTypes(e.target.value);
  };

  const getSearchedRecipes = () => {
    if (searchfield.length <= 3) {
      fetch(`http://localhost:3000/getAll`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((res) => {
          setFilteredRecipes(res.data);
        });
    } else {
      fetch(
        `http://localhost:3000/getRecommended/?searchType=${encodeURIComponent(
          searchType
        )}&searchTerm=${encodeURIComponent(searchfield)}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((result) => {
          setFilteredRecipes(result.data);
        });
    }
    console.log("searching for recipes");
  };

  const getRecipe = (recipe_id) => {
    fetch(`http://localhost:3000/getById/${encodeURIComponent(recipe_id)}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => {
        setRecipe(res.recipe_details);
        if (!modalIsOpen) {
          setIsOpen(true);
          console.log(recipe);
        }
      });
  };

  function searchList() {
    return (
      <Scroll>
        {filteredRecipes.map((recipes, i) => {
          return (
            <List
              key={i}
              recipes={recipes.data}
              header={recipes.type}
              getRecipeDetails={getRecipe}
            />
          );
        })}
      </Scroll>
    );
  }

  return (
    <section className="garamond">
      <div className="navy georgia ma0 grow">
        <h2 className="f2">Search a Recipe</h2>
      </div>
      <div className="pa2">
        <select
          id="types"
          value={searchType}
          className="grow  pa3 ba br3 bg-near-white ba b--sliver gray"
          onChange={handleSearchType}
        >
          {searchTypes.map((type, i) => (
            <option key={i} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        <input
          className="pa3 ba br3 grow b--none bg-lightest-blue ma3"
          type="search"
          placeholder="Search Recipes"
          onChange={handleSearch}
        />
      </div>
      {searchList()}
      <Modal
        show={modalIsOpen}
        onHide={() => setIsOpen(false)}
        dialogClassName="modal-50w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {recipe.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Close
          </Button>
          <Details recipe_id={recipe}></Details>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Search;

import React, { useState } from "react";
import List from "./List";
import Scroll from "./Scroll";

function Search({details}) {
    const [searchfield, setSearchfield] = useState("");
    const filteredRecipes = details.filter((recipe) => {
        return recipe.name.toLowerCase().includes(searchfield.toLowerCase());
        }
    );

    const handleChange = (e) => {
        setSearchfield(e.target.value);
    }

    function searchList(){
        return(
            <Scroll>
                <List recipes={filteredRecipes} />
            </Scroll>
        )
    }

    return (
        <section className="garamond">
            <div className="navy georgia ma0 grow">
                <h2 className="f2">Search a Recipe</h2>
            </div>
            <div className="pa2">
                <input
                    className="pa3 ba br3 grow b--none bg-lightest-blue ma3"
                    type="search"
                    placeholder="Search Recipes"
                    onChange={handleChange}
                />
            </div>
            {searchList()}
        </section>
    );
}

export default Search;

import React, { useEffect } from "react";
import Card from "./Card";

function List({ recipes }) {
    return (
        <div>
            {recipes.data.map(recipe => {
            return (
                console.log(recipe.data),
                <Card
                key={recipe.recipe_id}
                recipe={recipe}
                />
            );
            })}
        </div>
    );
}

export default List;

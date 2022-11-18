import React from "react";
import Card from "./Card";

function List({ recipes }) {
    return (
        <div>
            {recipes.map((recipe, i) => {
            return (
                <Card
                key={i}
                recipe={recipe}
                />
            );
            })}
        </div>
    );
}

export default List;

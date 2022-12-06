import Card from "./Card";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function List({ recipes, header, getRecipeDetails }) {
  let items = Array.from(
    recipes.map((recipe) => {
      return (
        <Card
          key={recipe.recipe_id}
          recipe={recipe}
          getRecipeDetails={getRecipeDetails}
        />
      );
    })
  );
  return (
    <div>
      <div className="list-heading">{header}</div>

      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        interval={3000}
        transitionTime={1000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        centerSlidePercentage={33.33}
        centerMode={true}
        width={"80%"}
        hei
      >
        {items}
      </Carousel>
    </div>
  );
}

export default List;

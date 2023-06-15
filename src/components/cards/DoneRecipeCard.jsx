import PropTypes from 'prop-types';
import React from 'react';

export default function DoneRecipeCard({ recipe, index }) {
  const { name, image, category, doneDate, tags } = recipe;
  return (
    <div>
      <h2 data-testid={ `${index}-horizontal-name` }>{name }</h2>
      <img data-testid={ `${index}-horizontal-image` } src={ image } alt={ name } />
      <p data-testid={ `${index}-horizontal-top-text` }>{ category}</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{doneDate}</p>

      {tags.length > 0 && tags.map((tag) => (
        <p
          key={ tag }
          data-testid={ `${index}-${tag}-horizontal-tag` }
        >
          {tag}
        </p>

      ))}

      <button data-testid={ `${index}-horizontal-share-btn` }>Share</button>

    </div>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.any,
  recipe: PropTypes.shape({
    category: PropTypes.string,
    doneDate: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    tags: PropTypes.shape({
      length: PropTypes.number,
      map: PropTypes.func,
    }),
  }),
}.isRequired;

import { graphql, Link } from 'gatsby'
import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface Props {

}

export default function SingleRecipePage({ data }: Props): ReactElement {
  const recipe = data?.allFood?.nodes?.map(i => i);
  const newRecipe = recipe[0]
  const ingre = newRecipe.ingredients
  var result = ingre?.split(',')?.map(word => `${word.trim()}`)?.join(', ');

  return (
    <>
      <RecipeGrid>
        <div>
          <h2>{newRecipe.title}</h2>
          <p>{result}</p>
          <p>protein: {newRecipe.protein}</p>
          <p>course: {newRecipe.course}</p>
          <p>protein: {newRecipe.protein}</p>
          <p>Ingredient: {newRecipe.mainIngredient}</p>
          <a href={newRecipe.source}>More info</a>
        </div>

        <Image src={newRecipe.photoUrl} alt={newRecipe.title} />
      </RecipeGrid>
    </>
  )
};

export const query = graphql`
query($recipe: String){
  allFood(filter: {title: {eq: $recipe}}){
    nodes{
      title
      ingredients
      fiber
      id
      fat
      totalTime
      url
      urlHost
      tags
      sugar
      source
      servings
      protein
      private
      photoUrl
      nutritionalScoreGeneric
      mainIngredient
      course
      cookTime
      carbohydrate
    }
  }
}


`

const RecipeGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

const Image = styled.img`
 width: 400px;
 height: 400px;
 object-fit: cover;
`

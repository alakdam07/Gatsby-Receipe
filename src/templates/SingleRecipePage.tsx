import { graphql, Link } from 'gatsby'
import React, { ReactElement } from 'react'
import styled from 'styled-components';

interface Props {

}

export default function SingleRecipePage({ data }: Props): ReactElement {
  const recipe = data?.allFood?.nodes?.map(i => i);
  const newRecipe = recipe[0]
  const ingre = newRecipe.ingredients
  const result = ingre?.split(',')?.map(word => `${word.trim()}`)?.join(', ');
  const images = [
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601973393/d3vdnihr3zytiatnzppi.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601973810/fqmcryloodyg19lx6gxf.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601974097/eum3csjpdvvnhmkhgoek.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601974157/oinefdsu4zqn1r115s6k.jpg"
  ];

  const RandomImages = Math.floor(Math.random() * images.length);

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

        <Image src={newRecipe.photoUrl === "" ? images[RandomImages] : newRecipe.photoUrl} alt={newRecipe.title} />
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

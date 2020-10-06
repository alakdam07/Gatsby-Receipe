import { graphql } from 'gatsby'
import React, { ReactElement } from 'react';
import RecipeList from '../components/RecipeList/RecipeList'
interface Props {

}

export default function index({ data }: Props): ReactElement {
  const totalFoods = data?.allFood?.nodes
  return (
    <>
      <RecipeList recipes={totalFoods} />
    </>
  )
}


export const query = graphql`
query {
   allFood {
    nodes {
      cookTime
      cost
      course
      cuisine
      description
      fat
      directions
      fiber
      id
      cholesterol
      carbohydrate
      ingredients
      mainIngredient
      nutritionalScoreGeneric
      photoUrl
      prepTime
      private
      protein
      publicUrl
      rating
      servings
      source
      sugar
      tags
      title
      totalTime
      url
      urlHost
    }
  }
}
`

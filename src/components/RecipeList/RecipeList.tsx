import React, { ReactElement } from 'react'
import { RecipeGridStyles, RecipeStyles } from '../../styles/Grid.ts';
import { Link } from 'gatsby';
import styled from 'styled-components';
interface IProps {

}

function SingleRecipe({ recipe }: IProps): ReactElement {
  return (
    <RecipeStyles>
      <Link to={`/recipe/${recipe.title}`}>
        <h2>
          <span className="mark">{recipe.title}</span>
        </h2>

        <Image src={recipe?.photoUrl} alt={recipe.name} />
      </Link>
    </RecipeStyles>
  )
}

interface Props {

}

export default function RecipeList({ recipes }: Props): ReactElement {
  return (
    <>

      <RecipeGridStyles>
        {recipes.map(recipe => <SingleRecipe key={recipe.id} recipe={recipe} />)}
      </RecipeGridStyles>
    </>
  )
}


const Image = styled.img`
 width: 400px;
 height: 400px;
 object-fit: cover;
`


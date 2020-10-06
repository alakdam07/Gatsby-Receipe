import React, { ReactElement } from 'react'
import { RecipeGridStyles, RecipeStyles } from '../../styles/Grid.ts';
import { Link } from 'gatsby';
import styled from 'styled-components';
interface IProps {

}

function SingleRecipe({ recipe }: IProps): ReactElement {
  const images = [
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601973393/d3vdnihr3zytiatnzppi.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601973810/fqmcryloodyg19lx6gxf.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601974097/eum3csjpdvvnhmkhgoek.jpg",
    "https://res.cloudinary.com/drewzxzgc/image/upload/v1601974157/oinefdsu4zqn1r115s6k.jpg"
  ];

  const RandomImages = Math.floor(Math.random() * images.length);

  return (
    <RecipeStyles>
      <Link to={`/recipe/${recipe.title}`}>
        <h2>
          <span className="mark">{recipe.title}</span>
        </h2>
        <Image src={recipe?.photoUrl === "" ? images[RandomImages] : recipe?.photoUrl} alt={recipe.name} />
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


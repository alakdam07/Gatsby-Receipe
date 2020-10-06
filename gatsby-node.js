const path = require('path');
const fetch = require('isomorphic-fetch');
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const response = await fetch('https://sampleapis.com/recipes/api/recipes');
  const data = await response.json();
  data.forEach(recipe => {
    const nodeMeta = {
      id: createNodeId(`recipe-${recipe.title}`),
      parent: null,
      children: [],
      internal: {
        type: 'Food',
        mediaType: 'application/json',
        contentDigest: createContentDigest(recipe),
      },
    };
    createNode({
      ...recipe,
      ...nodeMeta,
    });
  });
};


exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const createSingleRecipePage = path.resolve(`./src/templates/SingleRecipePage.tsx`);
  const recipeQuery = await graphql(`
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
`)

  recipeQuery.data.allFood.nodes.forEach(recipe => {
    createPage({
      path: `recipe/${recipe.title}`,
      component: createSingleRecipePage,
      context: {
        recipe: recipe.title
      }
    })
  });

}

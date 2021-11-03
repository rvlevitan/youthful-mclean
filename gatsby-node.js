const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const result = await graphql(
    `
      {
        allContentfulPost(filter: {slug: {ne: "block"}, numbering: {}}, sort: {fields: numbering}) {
         edges {
           node {
             slug
             title
             year
             image {
              fluid {
                src
              }
            }
           }
         }
       }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  
  // Create blog posts pages.
  const posts = result.data.allContentfulPost.edges
  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /locomotive-scroll/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
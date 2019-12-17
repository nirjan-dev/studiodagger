const path = require("path");
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark` || node.internal.type === `Mdx`) {
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMdx(
        filter: {
          fields: { collection: { eq: "posts" } }
          frontmatter: { publish: { eq: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/components/post.tsx`),
      context: { slug: node.frontmatter.slug }
    });
  });
};

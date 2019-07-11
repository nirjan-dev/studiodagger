module.exports = {
  siteMetadata: {
    title: 'Studio Dagger',
    titleTemplate: '%s | Studio Dagger',
    description:
      'Full Stack JavaScript Developer and Designer making beautiful,optimized and user friendly accessible websites with HTML, CSS, JS, React.js, Node.js, Next.js, Nest.js, Gatsby.js',
    url: 'http://localhost:8000',
    image: '/images/favicon.png',
    twitterUsername: '@NirjanKhadka',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.tsx'),
        },
      },
    },
  ],
};

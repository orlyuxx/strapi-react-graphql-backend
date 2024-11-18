// config/plugins.js
module.exports = {
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql", // The GraphQL endpoint path
      playgroundAlways: true, // Show GraphQL playground always (can be false if you prefer)
      shadowCRUD: true, // Enable shadow CRUD (CRUD for content types)
      depthLimit: 10, // Set a limit for query depth
      amountLimit: 100, // Set a limit for query results
      apolloServer: {
        tracing: false, // Disable Apollo server tracing (can be set to true if needed)
      },
    },
  },
};

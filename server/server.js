// Require the framework and instantiate it
const db = require('./database/models/index')
const fastify = require('fastify')({ logger: true })
const fastifyCors = require("fastify-cors");

// Import route 
const orderRoutes = require('./routes/orderRoutes');
const advertisementRoutes = require('./routes/advertisementRoutes');
const userRoutes = require('./routes/userRoutes');

// Register route
fastify.register(fastifyCors, {});
fastify.register(advertisementRoutes, { prefix: '/api' });
fastify.register(orderRoutes, { prefix: '/api' });
fastify.register(userRoutes, { prefix: '/api' });

// Run the server!
const start = async () => {
  try {
    await db.sequelize.authenticate()
    await fastify.listen(4000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()
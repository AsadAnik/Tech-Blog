import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    info: {
        title: 'My API Title',
        version: '1.0.0',
        description: 'Description of My API swagger',
    },
    basePath: '/api' // Base path of My API routes
};

const options = {
    swaggerDefinition,
    apis: ['../app/routes', '../routes/*.ts'], // Path to my route files
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;

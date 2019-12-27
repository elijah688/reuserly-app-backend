const http = require('http');
const app = require('../reuserly-app-backend/app.js')

const port = (3000 || process.env.PORT)
const server = http.createServer(app);


server.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});
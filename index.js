const express = require('express');
const app = express();

require('./database/connection')
const cors = require('cors');
const compression = require('compression')
const helmet = require('helmet')

const routes = require('./routers')

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(express.json())

app.use('/', routes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

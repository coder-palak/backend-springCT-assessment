const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.port || 3000;
// if need auth middleware we we can assign here like this
// app.use('*',require('./middleare/authentication.middlewar'))
app.use(cors());
app.use(express.json());
app.use('/company', require('./router/company.router'));
app.use('/users', require('./router/user.router'));


app.listen(PORT, () => {
    console.log(`Strted on ${PORT}`)
})
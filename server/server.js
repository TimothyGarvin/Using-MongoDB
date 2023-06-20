//Step 1 - import all dependencies
const express = require('express')
const app = express();
require('dotenv').config()
const port = 8000

//step 2 - configure express
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//one way
const Routes = require('./routes/students.routes')
Routes(app)

require('./config/mongoose.config')

//second way
// require('./routes/students.routes')(app)

//step 4 - listen on a port/provide feedback.
app.listen(port, () => console.log(`Connected to port ${port}`))
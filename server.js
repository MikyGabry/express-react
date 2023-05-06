require ("dotenv").config()
//const PORT = process.env.PORT || 4000;
const { PORT, MONGO_URL } = process.env;
const express = require('express')
const app = express()
const cors = require('cors')
const morgan = require('morgan')
const peopleRouter = require('./controllers/people')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/people', peopleRouter);



app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(PORT, () =>   
    console.log(`📚Server is listening to PORT: ${PORT}🤓`)
)
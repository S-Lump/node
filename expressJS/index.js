const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const addRoutes = require('./routes/add')
const coursesRoutes = require('./routes/courses')
const cartRoutes = require('./routes/cart')

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use('/', homeRoutes)
app.use('/add', addRoutes)
app.use('/courses', coursesRoutes)
app.use('/cart', cartRoutes)

const PORT = process.env.PORT || 3000

async function start() {
  try {
    const url = 'mongodb+srv://grigory:9u4MMrDfz7vyfmkI@cluster0.tek8q.mongodb.net/shop?retryWrites=true&w=majority'
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.set('useFindAndModify', false)
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}

start()

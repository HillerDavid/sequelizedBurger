let express = require('express')
let app = express()
let db = require("./models")

let PORT = process.env.PORT || 80

//Serves static content from 'public' directory

app.use(express.static("public"))

//Parse application body
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Set handlebars
let exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

//Import routes
let routes = require('./controllers/burgers_controller.js')
app.use(routes)

let syncOptions = { force: false }

if (process.env.NODE_ENV === "test") {
    syncOptions.force = true
}

//Start server
db.sequelize.sync(syncOptions).then(function () {
    app.listen(PORT, () => {
        //Log when server has started
        console.log('Server listening on: http://localhost:' + PORT)
    })
})

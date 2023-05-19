const express = require('express')
const app = express()
app.use(express.static('public'))
app.set('view engine', 'ejs')

// Middleware function to check time of request
const checkTime = (req, res, next) => {
  var today = new Date()
  var day = today.getDay() // 0 (Sunday) to 6 (Saturday)
  var hour = today.getHours() // 0 to 23

  if (day >= 1 && day <= 5 && hour >= 9 && hour < 17) {
    next() // Proceed
  } else {
    res.status(403).render('no_acess') // Return an not acess page
  }
}

//home page
app.get('/', checkTime, (req, res) => {
  console.log('server running')
  res.status(200).render('index')
})
// Our services page
app.get('/our_services', checkTime, (req, res) => {
  console.log('server running')
  res.status(200).render('our_services')
})

// contact us page
app.get('/contact_us', checkTime, (req, res) => {
  console.log('server running')
  res.status(200).render('contact_us')
})

app.listen(3000)

const express = require('express')
const app = express ()
const productCtrl = require('./controllers/productsController')
const cartCtrl = require('./controllers/cartController')

const SERVER_PORT = 5000

console.log(productCtrl)

app.use(express.json())

//*products endpoints
app.get('/api/products', productCtrl.getAllProducts)

//*cart endpoints
app.get('/api/cart', cartCtrl.getCart)
app.post('/api/cart', cartCtrl.addToCart)
app.put('/api/cart/:cart_id', cartCtrl.changeQuantity)
app.delete('/api/cart/:cart_id', cartCtrl.removeFromCart)
app.delete('/api/cart', cartCtrl.checkout)


app.listen(SERVER_PORT, () => console.log (`Mindless consumerism on port ${SERVER_PORT}`)
)
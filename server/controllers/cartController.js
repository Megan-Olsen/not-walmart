const products = require('../data.json')


const cart = {total: 0, items: []}
let cartId = 0

module.exports = {
    getCart: (req, res) => {
        res.status(200).send(cart)
    },
    addToCart: (req, res) => {

    },
    changeQuantity: (req, res) => {

    },
    removeFromCart: (req, res) => {

    },
    checkout: (req, res) => {

    },
    
}
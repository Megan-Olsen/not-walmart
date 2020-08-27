const products = require('../data.json')

module.exports ={
    getAllProducts: (req, res) => {
        console.log('hit')
        res.status(200).send(products)
    }
}
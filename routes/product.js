const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('', async (req, res, next) => {
    try {
        const products = await Product.find({});
        console.log(products)
        res.json({
        products: products
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something bad happenend.'
        });
        console.log(error)
    }
    
});

router.get('/put', async (req, res, next) => {

    try {
    const p = new Product({
        title: "Reusable Stainless Steel Straws with Case",
        description : [
                "Set of 2 Stainless Steel Straws, aluminium case, 2 silicon tips and cl...",
                "Regular (6mm wide) straw and Smoothie (8mm wide) straw allow you to en...",
                "Removable soft silicone tips protect lips and teeth, make it more comf...",
                "Metal case is made from recycled aluminium and can hold up to 6 straws...",
                "Great gift choice for your family and friends."
        ],
        colors : [
            {
                value:"black",
                image:"https://images-na.ssl-images-amazon.com/images/I/71xgLghoIVL._SL1500_.jpg",
                price:8.99
            },
            {
                value:"blue",
                image:"https://images-na.ssl-images-amazon.com/images/I/71L8kfvS55L._SL1404_.jpg",
                price:6.99
            },  {
                value:"green",
                image:"https://images-na.ssl-images-amazon.com/images/I/71t3z5lgftL._SL1408_.jpg",
                price:6.99
            },  {
                value:"orange",
                image:"https://images-na.ssl-images-amazon.com/images/I/718XvMQwQOL._SL1404_.jpg",
                price:6.99
            },  {
                value:"silver",
                image:"https://images-na.ssl-images-amazon.com/images/I/716xliFWkUL._SL1500_.jpg",
                price:9.99
            },  {
                value:"grey",
                image:"https://images-na.ssl-images-amazon.com/images/I/71wHWbZeXUL._SL1418_.jpg",
                price:6.99
            },  {
                value:"green-rainbow",
                image:"https://images-na.ssl-images-amazon.com/images/I/71oARxpP-YL._SL1500_.jpg",
                price:9.99
            },  {
                value:"pink-rainbow",
                image:"https://images-na.ssl-images-amazon.com/images/I/71dVAuje-7L._SL1500_.jpg",
                price:8.99
            },  {
                value:"rose-gold",
                image:"https://images-na.ssl-images-amazon.com/images/I/71vMf%2B08KxL._SL1500_.jpg",
                price:8.99
            }
    ],
    })
    const saveProduct  = await p.save()

     res.json({
         message:"Product SAVED !!",
         product: saveProduct
     });
    
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Something bad happened!"
        });
    }
})

module.exports = router;
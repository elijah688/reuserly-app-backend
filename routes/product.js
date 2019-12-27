const express = require('express');
const router = express.Router();
const Product = require('../models/product')

router.get('', async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).json({
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
    // try {
    // const p = new Product({
    //     title: "Reusable Stainless Steel Straws with Case",
    //     description : [
    //             "Set of 2 Stainless Steel Straws, aluminium case, 2 silicon tips and cleaning brush.",
    //             "Regular (6mm wide) straw and Smoothie (8mm wide) straw allow you to enjoy all kinds of drinks such as water, cocktail, coffee, juice, soft drinks, hot chocolate, milkshakes and smoothies.",
    //             "Removable soft silicone tips protect lips and teeth, make it more comfortable to sip cold or hot drinks.",
    //             "Metal case is made from recycled aluminium and can hold up to 6 straws plus the cleaning brush. Case is waterproof, easy to clean, and dishwasher safe (apart from stoppers).",
    //             "Great gift choice for your family and friends."
    //     ],
    //     colors : [
    //         {
    //             value:"black",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71xgLghoIVL._SL1500_.jpg",
    //             price:8.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TGMCC6J/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },
    //         {
    //             value:"blue",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71L8kfvS55L._SL1404_.jpg",
    //             price:6.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07RG92VCF/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"green",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71t3z5lgftL._SL1408_.jpg",
    //             price:6.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBG6YN/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"orange",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/718XvMQwQOL._SL1404_.jpg",
    //             price:6.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBG6YN/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"silver",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/716xliFWkUL._SL1500_.jpg",
    //             price:9.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TDCML7Y/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"grey",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71wHWbZeXUL._SL1418_.jpg",
    //             price:6.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBFFY6/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"green-rainbow",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71oARxpP-YL._SL1500_.jpg",
    //             price:9.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07ZXNPJ2R/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"pink-rainbow",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71dVAuje-7L._SL1500_.jpg",
    //             price:8.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07T9B9QRD/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         },  {
    //             value:"rose-gold",
    //             image:"https://images-na.ssl-images-amazon.com/images/I/71vMf%2B08KxL._SL1500_.jpg",
    //             price:8.99,
    //             buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TCDLZ42/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
    //         }
    // ],
    // })
    // const saveProduct  = await p.save()

    //  res.json({
    //      message:"Product SAVED !!",
    //      product: saveProduct
    //  });
    
    // } 
    // catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //         message:"Something bad happened!"
    //     });
    // }
})


router.get('/put/iphone', async (req, res, next) => {
    // try {
    // const p = new Product({
    //     title: "Reuserly iPhone 11 Pro (2019) Silicone TPU Case",
    //     description : [
    //         "Supports wireless charging and compatible.",
    //         "Nicely detailed and made for perfect fit clear iPhone XI 5.8' case; Perfect cutouts for speakers, camera and other ports.",
    //         "Only 1mm thin, won't add bulk to your iPhone XI.",
    //         "Long-lasting clarity resistant to yellow coloration.",
    //         "We ensures you worry-free one year warranty and life-time premium customer service, making your purchase absolutely risk-free."
    //     ],
    //     colors : [
    //         {
    //             value:'5.8"',
    //             image:"https://images-na.ssl-images-amazon.com/images/I/61cz7kylTNL._AC_SL1200_.jpg",
    //             price:5.99,
    //             buy_link: "https://www.amazon.co.uk/dp/B07W65GNNZ/ref=twister_B07W762VG9?_encoding=UTF8&th=1"
    //         },
    //         {
    //             value:'6.5"',
    //             image:"https://images-na.ssl-images-amazon.com/images/I/61cz7kylTNL._AC_SL1200_.jpg",
    //             price:5.99,
    //             buy_link: "https://www.amazon.co.uk/dp/B07WCGXWCG/ref=twister_B07W762VG9?_encoding=UTF8&th=1"
    //         },
    // ],
    // })
    // const saveProduct  = await p.save()

    //  res.json({
    //      message:"Product SAVED !!",
    //      product: saveProduct
    //  });
    
    // } 
    // catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //         message:"Something bad happened!"
    //     });
    // }
})

module.exports = router;
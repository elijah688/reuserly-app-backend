
const Straw = require('../models/straw')

exports.getStraws = ('', async (req, res, next) => {
    try {
        const straws = await Straw.find({});
        res.status(200).json({
            straws: straws
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something bad happenend.'
        });
        console.log(error)
    }
    
});

exports.putStraw = ('/put', async (req, res, next) => {
    try {
    const s = new Straw({
        title: "Reusable Stainless Steel Straws with Case",
        description : [
                "Set of 2 Stainless Steel Straws, aluminium case, 2 silicon tips and cleaning brush.",
                "Regular (6mm wide) straw and Smoothie (8mm wide) straw allow you to enjoy all kinds of drinks such as water, cocktail, coffee, juice, soft drinks, hot chocolate, milkshakes and smoothies.",
                "Removable soft silicone tips protect lips and teeth, make it more comfortable to sip cold or hot drinks.",
                "Metal case is made from recycled aluminium and can hold up to 6 straws plus the cleaning brush. Case is waterproof, easy to clean, and dishwasher safe (apart from stoppers).",
                "Great gift choice for your family and friends."
        ],
        colors : [
            {
                value:"black",
                image:"https://images-na.ssl-images-amazon.com/images/I/71xgLghoIVL._SL1500_.jpg",
                price:8.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TGMCC6J/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },
            {
                value:"blue",
                image:"https://images-na.ssl-images-amazon.com/images/I/71L8kfvS55L._SL1404_.jpg",
                price:6.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07RG92VCF/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"green",
                image:"https://images-na.ssl-images-amazon.com/images/I/71t3z5lgftL._SL1408_.jpg",
                price:6.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBG6YN/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"orange",
                image:"https://images-na.ssl-images-amazon.com/images/I/718XvMQwQOL._SL1404_.jpg",
                price:6.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBG6YN/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"silver",
                image:"https://images-na.ssl-images-amazon.com/images/I/716xliFWkUL._SL1500_.jpg",
                price:9.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TDCML7Y/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"grey",
                image:"https://images-na.ssl-images-amazon.com/images/I/71wHWbZeXUL._SL1418_.jpg",
                price:6.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07QLBFFY6/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"green-rainbow",
                image:"https://images-na.ssl-images-amazon.com/images/I/71oARxpP-YL._SL1500_.jpg",
                price:9.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07ZXNPJ2R/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"pink-rainbow",
                image:"https://images-na.ssl-images-amazon.com/images/I/71dVAuje-7L._SL1500_.jpg",
                price:8.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07T9B9QRD/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            },  {
                value:"rose-gold",
                image:"https://images-na.ssl-images-amazon.com/images/I/71vMf%2B08KxL._SL1500_.jpg",
                price:8.99,
                buy_link: "https://www.amazon.co.uk/Rose-Reusable-Stainless-Steel-Straws/dp/B07TCDLZ42/ref=sr_1_1?m=AXZZLUOFE5VAI&qid=1577485483&s=merchant-items&sr=1-1&th=1"
            }
    ],
    })
    const savedStraw  = await s.save()

     res.json({
         message:"Straws saved!",
         straw: savedStraw
     });
    
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Something bad happened!"
        });
    }
})


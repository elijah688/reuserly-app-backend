const Protector = require('../models/protector')

exports.getProtectors = ('', async (req, res, next) => {
    try {
        const protectors = await Protector.find({});
        res.status(200).json({
            protectors: protectors
        });
    } catch (error) {
        res.status(500).json({
            message: 'Something bad happenend.'
        });
        console.log(error)
    }
    
});


exports.putProtector =('/put', async (req, res, next) => {
    try {
    const p = new Protector({
        title: "Reuserly iPhone 11 Pro (2019) Silicone TPU Case",
        description : [
            "Supports wireless charging and compatible.",
            "Nicely detailed and made for perfect fit clear iPhone XI 5.8' case; Perfect cutouts for speakers, camera and other ports.",
            "Only 1mm thin, won't add bulk to your iPhone XI.",
            "Long-lasting clarity resistant to yellow coloration.",
            "We ensures you worry-free one year warranty and life-time premium customer service, making your purchase absolutely risk-free."
        ],
        sizes : [
            {
                size:'5.8"',
                image:"https://images-na.ssl-images-amazon.com/images/I/61cz7kylTNL._AC_SL1200_.jpg",
                price:5.99,
                buy_link: "https://www.amazon.co.uk/dp/B07W65GNNZ/ref=twister_B07W762VG9?_encoding=UTF8&th=1"
            },
            {
                size:'6.5"',
                image:"https://images-na.ssl-images-amazon.com/images/I/61cz7kylTNL._AC_SL1200_.jpg",
                price:5.99,
                buy_link: "https://www.amazon.co.uk/dp/B07WCGXWCG/ref=twister_B07W762VG9?_encoding=UTF8&th=1"
            },
    ],
    })
    const savedProtector  = await p.save()

     res.json({
         message:"Protector saved!",
         protector: savedProtector
     });
    
    } 
    catch (error) {
        console.log(error)
        res.status(500).json({
            message:"Something bad happened!"
        });
    }
})

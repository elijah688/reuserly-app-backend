const Flute = require('../models/flute')


exports.getFlutes = ('', async (req, res, next) => {
    try {
        const flutes = await Flute.find({});
        res.status(200).json({
            flutes: flutes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something bad happened!'
        });
    }
});


exports.putFlute = ('/put', async (req, res, next) => {
    try {
        const flute = new Flute({
            title:"Stemless Double-Insulated Wine Tumbler Champagne Flute",
            description: [
                "Champagne Flutes with Insulated Double-Wall Technology to Keep Hot and Cold Longer: The advanced structure keeps drinks cold for 6+ hours and hot for 3+ hours.",
                "Premium Material: High quality 18/8 of 304 Grade stainless steel. Light weight and lead free. Durable quality, rust-proof, sweat proof, easy wash and unbreakable.",
                "Stylish Designs: 6oz capacity designed especially for you to enjoy your champagne, wine or any other beverages. Curved body for easy holding. Advanced technology coated, exquisite for your home, parties, outdoors and office time. This elegantly designed vacuum champagne tumbler with lid is a perfect gift for your family, your friends, and yourself.",
                "Clear Lid, No Closure: A push-in, clear tritan lid comes with each Spirit Wine Tumbler, which is dishwasher safe.",
                "Perfect for your next birthday party, bridal shower, outdoor celebration and any occasion."
            ],
            colors : [
                {
                    value:"rose-gold",
                    image:"https://i.ibb.co/hWYvfpv/flute.jpg",
                    price: 0.00,
                    buy_link: "https://www.amazon.co.uk/Reuserly-Stemless-Double-Insulated-Champagne-Unbreakable/dp/B07WMVZRCS"
                }]
            })
        const savedFlute = await flute.save();
        res.status(200).json({
            savedFlute:savedFlute
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something bad happenend!"
        });
    }
});


const express = require('express');
const router = express.Router();
const Book = require('../models/book')


router.get('', async (req, res, next) => {
    try {
        const books = await Book.find({});
        res.status(200).json({
            books:books
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Something bad happened!'
        });
    }
});


router.get('/put', async (req, res, next) => {
    // try {
    //     const book = new Book({
    //         title:"Financial and Management Accounting: An Introduction (7th Edition)",
    //         description:"The seventh edition of this well-respected and fully updated text retains all of the features that have contributed to the book’s popularity: focus on the accounting equation, student activities and real-life commentaries throughout each chapter, a clear and accessible writing style, and inclusion of real-world case studies. With a strong emphasis on the Conceptual Framework of the International Accounting Standards Board, Financial & Management Accounting: An Introduction guides students in understanding the ‘why’ and not just the ‘what’ of financial and management accounting.",
    //         author:"Prof Pauline Weetman",
    //         image:"https://images-na.ssl-images-amazon.com/images/I/512hqMZ6G3L._SX366_BO1,204,203,200_.jpg",
    //         edition:7,
    //         year: Date.parse('19 Nov 2015 00:00:00 GMT'),
    //         price: 37.99,
    //         buy_link:"https://www.amazon.co.uk/Financial-Management-Accounting-Pauline-Weetman/dp/1292086599/ref=sr_1_2?m=AXZZLUOFE5VAI&marketplaceID=A1F83G8C2ARO7P&qid=1577487054&s=merchant-items&sr=1-2"
    //     })
    //     const savedBook = await book.save();
    //     res.status(200).json({
    //         savedBook:savedBook
    //     });
    // } catch (error) {
    //     console.log(error);
    //     res.status(500).json({
    //         message: "Something bad happenend!"
    //     });
    // }
});


module.exports = router
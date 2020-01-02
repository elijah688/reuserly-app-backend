const Book = require('../models/book')


exports.getBooks = ('', async (req, res, next) => {
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


exports.putBook = ('/put', async (req, res, next) => {
    // try {
    //     const book = new Book({
    //         title: "Total Recall ",
    //         description: "Total Recall is the unbelievably true story of Arnold Schwarzenegger's life. Born in the small city of Thal, Austria, in 1947, he moved to Los Angeles at the age of 21. Within ten years, he was a millionaire business man. After twenty years, he was the world's biggest movie star. In 2003, he was Governor of California and a household name around the world.",
    //         author: "Arnold Schwarzenegger",
    //         image: "https://i.ibb.co/3cp3Pj4/total.jpg",
    //         edition: 3,
    //         year: new Date('23 May 2013 00:00:00 GMT'),
    //         price: 26.71,
    //         buy_link: "https://www.amazon.co.uk/Total-Recall-Unbelievably-Thorndike-Nonfiction/dp/1410452107/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1577931335&sr=8-1",
    //       })

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


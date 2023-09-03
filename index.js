// const PORT = process.env.PORT || 3020;

// const express = require("express");

// var ExifImage = require('exif').ExifImage;

// const app = express();
// app.use(express.json());

// app.listen(PORT, () => {
//     console.log("Server Listening on PORT:", PORT);
// });

// app.get("/image", (request, response) => {

//     try {
//         new ExifImage({ image : request.query.imgLink}, function (error, exifData) {
//             if (error)
//                 console.log('Error: '+error.message);
//             else
//                 console.log(exifData); // Do something with your data!
//         });
//     } catch (error) {
//         console.log('Error: ' + error.message);
//         exifData = null;
//     }


//    response.send(exifData);
// });

const PORT = process.env.PORT || 3020;
const express = require("express");
var ExifImage = require('exif').ExifImage;

const app = express();
app.use(express.json());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

app.get("/image", (request, response) => {
    try {
        new ExifImage({ image : request.query.imgLink }, function (error, exifData) {
            if (error)
                console.log('Error: ' + error.message);
            else {
                console.log(exifData); // Do something with your data!
                response.send(exifData); // Send the data in the response inside the try block
            }
        });
    } catch (error) {
        console.log('Error: ' + error.message);
        const exifData = null; // You can define it here with some default value if needed
        response.send(exifData);
    }
});

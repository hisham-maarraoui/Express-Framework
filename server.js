
// I worked on this code as part of a coding bootcamp curriculum. I followed along with the instructions 
// (i.e. followed/copied instructions from the course/instructors and didn't design everything from scratch myself) while
//  writing code in this project/file. Moreover, I  acknowledge receiving support from and/or working/collaborating
//   with instructors/classmates, generally as is expected from being a participant in the coding bootcamp.



const express = require('express');  // importing express and binding it to a variable

const morgan = require('morgan');


const campsiteRouter = require('./routes/campsiteRouter');
const promotionRouter = require('./routes/promotionRouter');
const partnerRouter = require('./routes/partnerRouter');



const hostname = 'localhost';


const port = 3000;

const app = express();  // express() returns an object with a bunch of methods that we can use e.g. app.use(), app.listen()

app.use(morgan('dev'));     // morgan is a middleware tool....helps in outputting/logging messages....middleware 'enhances' the responses/requests as they move between the client and the server
app.use(express.json());

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);



app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});





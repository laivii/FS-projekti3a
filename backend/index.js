const express = require( 'express' );
const mongoose = require( 'mongoose' );
const fs = require( 'fs' );
const ObjectId = mongoose.Types.ObjectId;

const app = express();
      app.use( express.json() );
      app.use( express.urlencoded() );

//Haetaan ympäristömuuttujat .env tiedostosta
require( "dotenv" ).config();

//Alustetaan haetut tiedot muuttujiin ja rakennetaan tietokannan URL
var username = process.env.MONGO_USERNAME;
var password = process.env.MONGO_PASSWORD;
var uri = "mongodb+srv://" + username + ":" + password + "@cluster0.ml37p7a.mongodb.net/Forum";

//Yhdistetään tietokantaan
mongoose.connect( uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
console.log( "Connection made..." );

//Luodaan Schema
var Schema  = mongoose.Schema;
const messageSchema = new Schema({
    username : String,
    country : String,
    message : String,
    date : Date
}, {collection : "Messages", versionKey : false});

const Message = mongoose.model( "Message", messageSchema );

//Kaikkien dokumenttien hakeminen
app.get( '/api/getall', async ( req, res ) => {
    try {
        var messages = await Message.find({});
        res.send( messages );
    } catch ( error ) {
        console.log( error );
        res.status( 500 ).send( "Internal server error" );
    }
});

//Tietyn dokumentin haku käyttäjänimen perusteella
app.get( '/api/username/:username', async ( req, res ) => {
    var username = req.params.username;
    var message = await Message.find({ username });
    console.log( 'viestihaettu' );
    console.log(message)

});

/*//Tietyn dokumentin haku ID:n perusteella
app.get( '/api/:id', async ( req, res ) => {
    var id = new ObjectId( req.params.id );
    const message = await Message.findById( id );
    console.log( message );
});*/

//Uuden dokumentin lisääminen
app.post( '/api/add', async ( req, res ) => {
    var content = req.body;

    var newMessage = new Message({
        username : content.username,
        country : content.country,
        message : content.message,
        date : content.date
    });

    newMessage.save().then(() => {
        console.log( "Tallennettu");
    }).catch( error => {
        console.log( error );
    });

    res.set("location", "/");
    res.status( 301 ).send();
    return;
});

//Tieteyn dokumentin muokkaaminen ID:n perusteella
app.put( '/api/update/:id', async ( req, res ) => {
    var id = new ObjectId( req.params.id );
    const filter = { _id : id };
    const update = req.body;
    
    Message.updateOne( filter, update )
        .then(result => {
            console.log( `Document updated.` );
        }).catch( error => {
            console.log( error );
        });
    
    res.set("location", "/");
    res.status( 200 ).send();
    return;
});

//Tietyn dokumentin poistaminen ID:n perusteella
app.delete( '/api/delete/:id', async ( req, res ) => {
    var id = new ObjectId( req.params.id );
    const filter = { _id : id };

    Message.deleteOne( filter )
        .then( () => {
            console.log( "Document deleted. ");
        }).catch( error => {
            console.log( error );
        });

    res.status( 200 ).send();
    return;
});

app.get( '*', function ( req, res ) {
    res.send( "Can\'t find requested page" );
});

app.listen(8080);

/*
mongoose.connection.close();
console.log( "...connection closed..." );*/

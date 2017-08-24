const express= require ('express'),
        app= express(),
        bodyParser= require ('body-parser'),
        mongoose= require ('mongoose'),
        path= require ('path');
        
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname + './../final_front/build')))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "DELETE");
    next();
  });

mongoose.connect('mongodb://localhost/data/db');
const db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to db at /data/db')
})

const User= require('./models/Users')

app.get('/users', (req, res) => {
    User.find({})

    .then(users => {
        res.json(users)
    })

    .catch(err => {
        console.log(err)
    });
})

app.get('/users/:objectId', (req,res) => {
    User.findById(req.params.objectId)
        .then(user => {
            res.json(user);
        })
        .catch(err => {
            res.status(400)
                .json({err})
        })
});

app.post('/users', (req, res) => {
    console.log(req.body.newProfile)
    let object= req.body.newProfile
    
    let newObject= User(object);
    newObject.save()
             .then(savedObject => {
                 res.json(savedObject);
             })
             .catch(err => {
                 res.status(400)
                    .json({err})
             });
})

app.put('/users/:objectId', (req, res) => {
    let query= {'_id': req.params.objectId}

    console.log(query);
    User.findOneAndUpdate(query, req.body ,{ new:true})
        .then(updatedObject => {
            console.log(updatedObject);
            res.json(updatedObject);
        })
        .catch(err => {
            console.log(err)
            res.status(400)
                .json({err});
        })
    })

    app.delete('/users/:objectId',(req, res) => {
        User.findOneAndRemove({'_id': req.params.objectId})
                .then(deletedObject => {
                    res.json(deletedObject)
                })
                .catch(err => {
                    res.status(400)
                        .json({err})
                });
    })




app.listen(8080, () => {
    console.log('I am the backbone to this project!');
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname + './../final_front/build/index.html'))
})
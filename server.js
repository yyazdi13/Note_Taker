var express = require('express');
var htmlRoutes = require('./routes/htmlRoutes');
var fs = require('fs');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/', htmlRoutes);

var data = [
    {
        title: 'title',
        text: 'text',
        id: '1'
    }
];

var x = parseInt(data[0].id);
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../../index.html"));
// });

// app.get("/notes", function(req, res){
//     res.sendFile(path.join(__dirname, "../../notes.html"));
// });


app.post("/api/notes", function(req, res){
    var newNote = req.body;
    for (let i = 0; i < data.length; i++){
        x++;
    }
    newNote.id = x;
    // fs.appendFile("./journal.json", req.body, function(err, data){
    //     if (err){
    //         throw err;
    //     }
    //     else console.log(data);
    // });
    data.push(newNote);
    console.log(data);
});

app.listen(PORT, function(){
    console.log("listening on port " + PORT);
});
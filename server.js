var express = require('express');
var htmlRoutes = require('./routes/htmlRoutes');
var fs = require('fs');

var app = express();
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use('/', htmlRoutes);

const notes = [
    {
        title: 'title',
        text: 'text',
        id: '0'
    }
];

// var x = parseInt(notes[0].id);
// app.get("/", function(req, res){
//     res.sendFile(path.join(__dirname, "../../index.html"));
// });

// app.get("/notes", function(req, res){
//     res.sendFile(path.join(__dirname, "../../notes.html"));
// });


app.post("/api/notes", function(req, res){
    var newNote = req.body;
    for (let i = 0; i < notes.length; i++){
        var x = parseInt(notes[i].id);
        x++;
        console.log(x);
    }
    newNote.id = JSON.stringify(x);
    notes.push(newNote);
    var saveNote = JSON.stringify(notes, null, 2);
    fs.appendFile("./journal.json", saveNote, function(err, data){
        if (err){
            throw err;
        }
    });
});

app.get("/api/notesdb", function(req, res){
    res.json(data, {id: x});
});

app.delete("/api/notes", function(req, res){

});

app.listen(PORT, function(){
    console.log("listening on port " + PORT);
});
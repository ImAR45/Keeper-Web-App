const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/keeperDB', { useNewUrlParser: true, useUnifiedTopology: true });

const noteSchema = {
    title: String,
    content: String
}

const Note = mongoose.model('note', noteSchema);

app.get('/api', (req, res) => {
    Note.find({},(err, postFound)=> {if(!err) res.send(postFound)})
})

app.post('/api/add', function(req, res) {
    const newNote = new Note(req.body.newNote);
    newNote.save(function(err) {
      if (!err) {
        res.send(newNote);
      }
    });
  });

  app.post("/api/remove",function(req, res){
    const id = req.body.id;
    Note.deleteOne({_id: id}, (err) => {
        if(!err)
            res.send("Data Deleted");
    });
  });

app.listen(4000,() => console.log("working sever"));
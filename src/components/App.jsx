import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
// import notes from "../notes";
import CreateArea from "./CreateArea";
import axios from "axios";


function App() {

    const[notes, setNotes] = useState([]);

    axios.get('/api').then(response => {
        setNotes(response.data);
    })

    function handleNotes(newNote) {
        axios.post('http://localhost:4000/api/add',{newNote}).then(response => {console.log(response.data)}); 
    }

    function deleteNotes(id) {
        axios.post('http://localhost:4000/api/remove',{id}).then(response => console.log(response.data));
        // setNotes(prevNotes => prevNotes.filter((note, index) => index !== id))

    }
  return (
    <div>
      <Header></Header>
      <CreateArea handleNotes={handleNotes}></CreateArea>
      <section>
      {notes.map((note, index) => (
        <Note deleteNotes={deleteNotes} key={index} id={note._id} title={note.title} content={note.content}></Note>
      ))}
      </section>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import AddIcon from '@material-ui/icons/Add';
// import axios from 'axios';

function CreateArea(props) {
  const[condition, setCondition] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const {name, value} = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      }
    });
  }

  // const [title ,setTitle] = useState('');
  // const[content, setContent] = useState('');

  // function handleTitle(event) {
  //   const {value} = event.target;
  //   setTitle(value);
  // }

  // function handleContent(event) {
  //   const {value} = event.target;
  //   setContent(value);
  // }

  function handleClick(event) {
    const newNote = {
      title: note.title,
      content: note.content,
    };
    props.handleNotes(newNote);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  function check(){
    setCondition(true);
  }
  return (
    <div>
      <form className="create-note">
      {condition && <input
          name="title"
          placeholder="Title"
          value={note.title}
          onChange={handleChange}
          autoComplete="off"
        />}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={condition?3:1}
          value={note.content}
          onChange={handleChange}
          onClick={check}
        />
        <Zoom in={condition}>
        <Fab onClick={handleClick}><AddIcon></AddIcon></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

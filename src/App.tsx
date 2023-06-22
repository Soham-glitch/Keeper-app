import { useState } from "react";
import CreateNoteForm from "./components/CreateNoteForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

interface Note {
  title: string;
  content: string;
  key: number | undefined;
}
function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (newNote: Note) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(newNote);
  };

  const deleteNote = (id: number) => {
    // console.log("delete was trigged");
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
        console.log(noteItem);
      });
    });
  };
  return (
    <>
      <Header />
      <div>
        <CreateNoteForm onAdd={addNote} />
      </div>
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </>
  );
}

export default App;

//challange 1.0---->implement the add note functionality

// create a const that keeps track of the title and content

//pass the new note back to the app

//add new note to an array

//take array and render seperate note component for each item

// 2.0----> implement the delete note functionality

//callback from the note component to trigger a delete function

//use the filter function to filter out the item that need deletion

//pass an id over to the note component and pass it back to the app

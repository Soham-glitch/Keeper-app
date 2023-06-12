import React, { useState } from "react";
import "./createNoteForm.css";

interface CreateNoteFormProps {
  onAdd: (note: Note) => void;
}

interface Note {
  title: string;
  content: string;
  key: number | undefined;
}
const CreateNoteForm: React.FC<CreateNoteFormProps> = (props) => {
  const [note, setNote] = useState<Note>({
    title: "",
    content: "",
    key: undefined,
  });
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };
  const submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      key: undefined,
    });
  };
  return (
    <div className="create-note-form">
      <form>
        <div>
          <input
            name="title"
            placeholder="Title"
            value={note.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <textarea
            name="content"
            onChange={handleChange}
            placeholder="Take a note..."
            value={note.content}
          />
        </div>
        <div>
          <button onClick={submitForm}>Add</button>
        </div>
      </form>
    </div>
  );
};
export default CreateNoteForm;

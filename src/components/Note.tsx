import "./note.css";
interface NoteProps {
  id: number;
  title: string;
  content: string;
  onDelete: (id: number) => void;
}
const Note: React.FC<NoteProps> = (props): JSX.Element => {
  const handleClick = () => {
    props.onDelete(props.id);
  };
  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>Del</button>
      </div>
    </>
  );
};
export default Note;

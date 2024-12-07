import { useNote } from "../../../NoteContext";  
import Form from "../NoteForm/Form";
import { List, NoteContentStyled } from "./NoteContent.style";

const NoteContent = () => {
    const { notes } = useNote();  
    console.log(notes)

    return (
        <NoteContentStyled>
        <Form />
        <div>
            <h2>Notas:</h2>
            <List>
            {notes.length > 0 ? (
                notes.map((note, index) => (
                <li key={index}>{note}</li>
                ))
            ) : (
                <p>Não há notas ainda!</p>
            )}
            </List>
        </div>
        </NoteContentStyled>
    );
};

export default NoteContent;

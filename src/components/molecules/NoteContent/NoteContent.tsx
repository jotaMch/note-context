import { useState } from "react";
import { useNote } from "../../../NoteContext";  
import Form from "../NoteForm/Form";
import { List, NoteContentStyled } from "./NoteContent.style";

const NoteContent = () => {
    const { notes } = useNote();  
    const [searchTerm, setSearchTerm] = useState("");
    
    const filteredNotes = notes.filter((note) =>
        note.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <NoteContentStyled>
            <Form />
            <div>
                <h2>Notas:</h2>
                <input
                    type="text"
                    placeholder="Pesquisar notas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{
                        padding: "8px",
                        marginBottom: "16px",
                        width: "100%",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                    }}
                />
                <List>
                    {filteredNotes.length > 0 ? (
                        filteredNotes.map((note, index) => (
                            <li key={index}>{note}</li>
                        ))
                    ) : (
                        <li>Não há notas correspondentes!</li>
                    )}
                </List>
            </div>
        </NoteContentStyled>
    );
};

export default NoteContent;

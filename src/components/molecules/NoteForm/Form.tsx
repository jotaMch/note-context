import React, { useState } from "react";
import { AddNote } from "./Form.style";
import { useNote } from "../../../NoteContext"; 
import Button from "../../atoms/Button/Button";

const Form: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>("");  
    const { notes, addNote } = useNote();  

    
    const handleAddNote = (e: React.FormEvent) => {
        e.preventDefault();  
        if (inputValue.trim()) {
        addNote(inputValue);  
        setInputValue("");  
        }
    };

    return (
        <AddNote>
        <form onSubmit={handleAddNote}> 
            <div className="flex-content">
            <input
                className="content-note"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}  // Atualizando o estado do input
                placeholder="Digite sua anotação"
            />
                <Button
                    name="Adicionar"
                    h="50px"
                    b="none"
                    bg="#111"
                    fz="20px"
                    color="#ffffff"
                    type="submit"
                />
            </div>
            

        </form>

        </AddNote>
    );
};

export default Form;
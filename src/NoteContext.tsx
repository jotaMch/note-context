import React, { createContext, useContext, useState, ReactNode } from "react";

type NoteContextType = {
    notes: string[];
    addNote: (newNote: string) => void;
    removeNote: (index: number) => void;
};

const NoteContext = createContext<NoteContextType | undefined>(undefined);

export const useNote = (): NoteContextType => {
    const context = useContext(NoteContext);
    if (!context) {
        throw new Error("useNote must be used within a NoteProvider");
    }
    return context;
    };

    type NoteProviderProps = {
    children: ReactNode;
    };

    export const NoteProvider: React.FC<NoteProviderProps> = ({ children }) => {
    const [notes, setNotes] = useState<string[]>([]);

    const addNote = (newNote: string) => {
        setNotes((prevNotes) => [...prevNotes, newNote]);
    };

    const removeNote = (index: number) => {
        setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    };

    return (
        <NoteContext.Provider value={{ notes, addNote, removeNote }}>
        {children}
        </NoteContext.Provider>
    );
};

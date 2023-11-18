import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, onAddNoteHandler, onDeleteHandler , updateText }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3  mx-auto">
            <AddNote onAddNoteHandler={onAddNoteHandler} />

            {notes.map((note) => (
                <Note
                    key={note.id}
                    id={note.id}
                    text={note.text}
                    date={note.date}
                    color={note.color}
                    onDeleteHandler={onDeleteHandler}
                    updateText = { (noteId, value)=> updateText(noteId, value) }
                    
                />
            ))}
        </div>
    );
};

export default NotesList;

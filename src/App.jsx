import { useEffect, useState } from "react";
import NotesList from "./Components/NotesList";
import { nanoid } from "nanoid";
import DummyNotes from "./Components/DummyNotes";
import Search from "./Components/Search";
import HeaderMain from "./Components/HeaderMain";


const initialNotes = [
  {
    id: nanoid(),
    text: "This is a dummy notes.You can toggle darkmode and add and delete note",
    date: "19/02/23",
    color: "#C4DFAA"
  },

];

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('react-notes-app-data')) || initialNotes);
  const [searchText, setSearchText] = useState("");
  const [toggle, setToggle] = useState(false);

  const addNote = (text, bgColor , title) => {
    const date = new Date();
    const newNoteData = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString('en-US', { hourCycle: 'h12', minute: '2-digit', day: '2-digit', month: 'short', hour: '2-digit' }),
      color: bgColor
    };

    const newNote = [...notes, newNoteData];
    setNotes(newNote);
  };

  const deleteNote = (id) => {
    const newNotesAfterDeletetion = notes.filter((note) => note.id !== id);
    setNotes(newNotesAfterDeletetion);
  };

  const updateTextHandler = (noteId, textValue) => {
    const prevNotes = [...notes];

    let indexToUpdate = prevNotes.findIndex((note) => note.id === noteId);
    if (indexToUpdate < 0) return;

    prevNotes[indexToUpdate].text = textValue;
    setNotes(prevNotes);
  }

 
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);



  return (
    <>
      <div className={`h-[100vh] overflow-auto no-scrollbar no-scrollbar ${toggle ? 'bg-[#121212] ' : 'text-black'
        }`}>
        <div className="max-w-[1260px] mx-auto px-4">
          <HeaderMain darkModeState={toggle} darkModeHandler={setToggle} />

          <Search searchNoteHandler={setSearchText} />

          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            onAddNoteHandler={addNote}
            onDeleteHandler={deleteNote}
            updateText={updateTextHandler}
            
          />

        </div>
        {/* <DummyNotes /> */}
      </div>
    </>
  );
}

export default App;

import { useState } from "react"
import React from 'react'



const DummyNotes = ({ onAddNoteHandler }) => {

    const colorList = ['#C4DFAA', '#F5F0BB', '#D6EFED', '#FBA1A1', '#DCD6F7', '#FFC7C7'];

    const [noteText, setNoteText] = useState('');
    const [selectedColor, setSelectedColor] = useState(colorList[0]);;

    const characterCount = 300;

    const noteTextChangeHandler = (event) => {
        if (characterCount - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const AddClickHandler = () => {
        if (noteText.trim().length > 0) {
            onAddNoteHandler(noteText);
        }
        setNoteText('');
    }

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    return (
        <>
            <div className='bg-blue-200 mb-3 rounded-md p-4 max-h-[300px] min-h-[300px] flex w-[23rem] mx-[20rem] justify-between '
                style={{ backgroundColor: selectedColor }}>
                <div className=" flex flex-col">
                    <textarea
                        cols="10"
                        rows="12"
                        placeholder='Type to add a note'
                        onChange={noteTextChangeHandler}
                        value={noteText}
                        className='resize-none bg-blue-200 focus:outline-none overflow-y-auto no-scrollbar'
                        style={{ backgroundColor: selectedColor }}>
                    </textarea>

                    <div className='flex items-center justify-between mt-2 w-[18rem]'>
                        <div className='font-semibold text-sm'>{characterCount - noteText.length} Words Remaining</div>
                        <button
                            onClick={AddClickHandler}
                            className='bg-slate-800 py-1 px-2 text-sm rounded font-bold text-white hover:bg-slate-600 hover:duration-300 hover:scale-110'>Add</button>
                    </div>
                </div>

                <div className="max-h-[300px] min-h-[260px] w-[2rem] bg-[#121212] rounded-lg flex items-center justify-center ">
                    <ul className="h-[18rem] bg-transparent flex justify-evenly flex-col">
                        {
                            colorList.map((color, index) =>
                                <li
                                    className={`w-5 h-5 rounded-full bg-${color} hover:cursor-auto`}
                                    key={index}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorClick(color)}
                                ></li>
                            )
                        }</ul>
                </div>

            </div>
        </>
    )
}

export default DummyNotes;
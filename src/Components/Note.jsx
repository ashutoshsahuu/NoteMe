import React from "react";
import { MdDeleteForever } from "react-icons/md";

const Note = ({ id, text, date, onDeleteHandler, color , updateText}) => {
    return (
        <>
            <div className=" mb-3 rounded-md p-4 max-h-[300px] min-h-[300px] md:w-[25rem] w-[21.5rem] flex flex-col justify-between whitespace-pre-wrap"
                style={{ backgroundColor: color }} >

                <textarea
                    className="overflow-auto no-scrollbar outline-none resize-none"
                    style={{ backgroundColor: color }} 
                    cols={10}
                    rows={20}
                    defaultValue={text}
                    onChange={(e) => updateText(id, e.target.value)}

                ></textarea>

                <div className="flex justify-between items-start ">
                    <div>{date}</div>
                    <button
                        onClick={() => {
                            onDeleteHandler(id);
                        }}
                    >
                        <MdDeleteForever className="text-[1.4em] hover:text-red-600 hover:scale-125 duration-300" />
                    </button>
                </div>

            </div>
        </>
    );
};

export default Note;

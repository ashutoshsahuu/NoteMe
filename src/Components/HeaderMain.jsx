import React from 'react'
import { MdLightMode, MdDarkMode} from 'react-icons/md';
const HeaderMain = ({ darkModeState, darkModeHandler }) => {

    const toggleHandler = () => {
        darkModeHandler(prevState => !prevState)
    }

    return (
        <div className='flex justify-between p-2 items-center'>
            <div className={`text-4xl font-mono ${darkModeState ? 'text-white' : 'text-black'} `} >NoteMe</div>
            <div>
                <button className={`text-3xl p-1 ${darkModeState ? ' text-white' : 'text-black'
                    }`} onClick={toggleHandler}>
                    {darkModeState ? <MdLightMode /> : <MdDarkMode />}
                </button>
            </div>
        </div>
    )
}

export default HeaderMain


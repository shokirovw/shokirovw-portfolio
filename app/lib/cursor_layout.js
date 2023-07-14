import { useState } from 'react';

export default function CursorLayout ({ children, screenpage }) {
    const [MousePosition, setMousePosition] = useState([0,0]);

    function handleMouseMove (ev) {
        setMousePosition([ev.pageX, ev.pageY]);
    }
    
    let c = "layout";

    if (screenpage && screenpage == true) {
        c = "layout overflow-x-hidden overflow-y-hidden min-h-[94vh] md:min-h-[100vh] flex flex-col layout-animate";
    }

    return (
        <div onMouseMove={(ev) => handleMouseMove(ev)} className={c}>
            <div style={{ transform: `translateX(${MousePosition[0] - 10}px) translateY(${MousePosition[1] - 10}px)` }} className={`absolute hidden md:flex transition duration-200 ease-out -z-30 w-5 h-5 border-2 border-white/80 rounded-full items-center justify-center`}>
                <div className='w-[4px] h-[4px] bg-white/80 rounded-full'></div>
            </div>
            {children}
        </div>
    );
}
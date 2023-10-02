import { useEffect, useState } from 'react';

// Approach using onMouseMove={}
// function handleMouseMove<MouseEv extends { pageX: number, pageY: number }> (event: MouseEv) {
//     setMousePosition([event.pageX, event.pageY]);
// }

export default function SmoothCursor ({ children }: { children: React.ReactNode }): JSX.Element {
    const [MousePosition, setMousePosition] = useState<[number, number]>([0,0]);

    useEffect(() => {
        window.addEventListener("mousemove", function (e) {
            setMousePosition([ e.pageX, e.pageY ]);
        })
    }, []);

    return (
        <>
            <div style={{ transform: `translateX(${MousePosition[0] - 10}px) translateY(${MousePosition[1] - 10}px)` }} className={`absolute hidden md:flex transition duration-200 ease-out z-100 w-5 h-5 border-2 border-white/80 rounded-full items-center justify-center`}>
                <div className='w-[4px] h-[4px] bg-white/80 rounded-full'></div>
            </div>
            {children}
        </>
    );
}
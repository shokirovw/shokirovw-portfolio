import localFont from 'next/font/local';

const myFont = localFont({ src: '../fonts/my-font.woff2', variable: '--font-acorn' });
const myFont2 = localFont({ src: '../fonts/my-font2.otf', variable: '--font-gtplanar' });
// font vars in tailwind.config.js should match with these

export type BodyFontClass = {
    className: string
}

export function FontIncluder (): BodyFontClass {
    return {
        className: `${myFont.variable} ${myFont2.variable}` // pass this object as prop to a body tag
    }
}

export default function ApplyOurFont ({ children }: { children: JSX.Element }): JSX.Element {
    return (
        <div className={`${myFont.variable} ${myFont2.variable}`}>
            {children}
        </div>
    );
}
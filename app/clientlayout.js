'use client';

import Navbar from "@/app/lib/navbar";
import { usePathname } from 'next/navigation';

import Footer, { FooterMinimal } from './lib/footer';
import CursorLayout from './lib/cursor_layout';

export default function ClientLayout ({ children, weather_data }) {
    let pathname = usePathname();
    let isScreenpage = false;
    let footer;

    if (pathname && pathname == "/home") isScreenpage = true;

    footer = isScreenpage ? <FooterMinimal /> : <Footer />;

    return (
        <CursorLayout screenpage={isScreenpage}>
            <Navbar {...weather_data} />
            {children}
            {footer} 
        </CursorLayout>
    );
    
}
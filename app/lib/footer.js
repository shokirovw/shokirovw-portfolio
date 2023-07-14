import { motion } from 'framer-motion';
import generateSocialLinks from './socialLinks';
import Link from 'next/link';

export default function Footer () {
    return (
        <div className='footer w-full'>
            <div className='container max-w-5xl mx-auto py-5 px-14 flex flex-col md:flex-row md:space-y-0 space-y-4 justify-between border-t-2 border-t-white/20'>
                <div><p className='text-white/80 text-base md:text-lg font-regular tracking-wide'>© 2023 Shokirov Muhammadiyor</p></div>
                <div className='text-white/80 max-w-max space-x-6'>
                    {generateSocialLinks((link, i) => {
                        return (
                            <Link href={link.href}>
                                <link.icon className='inline transition-all w-6 h-6 md:w-8 md:h-8 hover:scale-125 hover:text-white/100' />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export function FooterMinimal () {
    return (
        <motion.div className="h-fit py-8 w-full px-10 flex items-center justify-center" initial={{ opacity: 0, y: 30 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }} >
            <p className='text-white/80 text-base md:text-lg font-regular tracking-wide'>© 2023 Shokirov Muhammadiyor</p>
        </motion.div>
    );
}
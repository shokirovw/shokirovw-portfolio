'use client';

import { motion } from 'framer-motion';

export default function MinimalFooter () {
    return (
        <motion.div className="h-fit py-8 w-full px-10 flex items-center justify-center" initial={{ opacity: 0, y: 30 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5 }} >
            <p className='text-white/80 text-base md:text-lg font-regular tracking-wide'>© 2023 Shokirov Muhammadiyor</p>
        </motion.div>
    );
}
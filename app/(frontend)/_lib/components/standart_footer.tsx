export default async function StandartFooter ({ text, extended_block }: { text: string; extended_block: JSX.Element }) {    
    return (
        <div className='footer w-full'>
            <div className='container max-w-5xl mx-auto py-5 px-14 flex flex-col md:flex-row md:space-y-0 space-y-4 justify-between border-t-2 border-t-white/20'>
                <div><p className='text-white/80 text-base md:text-lg font-regular tracking-wide'>{text}</p></div>
                <div className='text-white/80 max-w-max space-x-6 hidden md:block'>
                    {extended_block}
                </div>
            </div>
        </div>
    );
}
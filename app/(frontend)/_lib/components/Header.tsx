export default function HeaderComponent ({ left_side, center, right_side }) {
    return (
        <div className="flex flex-wrap gap-y-3 items-center flex-row lg:gap-y-0 py-6 px-10 relative justify-center">
            <div className='h-fit block lg:mr-auto'>
                {left_side}
            </div>
            <div className="h-fit relative lg:absolute">
                {center}
            </div>
            <div className='h-fit block lg:ml-auto'>
                {right_side}
            </div>  
        </div>
    )
}
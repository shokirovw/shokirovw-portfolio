export default function HeaderDescriptionLayout ({ header, desc, children, maxw = "4" }) {
    return (
        <div className='container w-full max-w-full px-8 md:pt-16 lg:px-16 mx-auto'>
            <div className={`container max-w-${maxw}xl mx-auto`}>
                <h1 className='text-6xl lg:text-7xl text-center'>{header}</h1>
                <p className="text-content mt-4 container max-w-2xl mx-auto text-center">{desc}</p>
                <div className="mt-10">
                    {children}
                </div>
            </div>
        </div>
    );
}
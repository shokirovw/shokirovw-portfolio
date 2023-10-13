export default function StandartPageLayout ({ children }) {
    return (
      <div className='container max-w-4xl mx-auto min-h-[82vh] pt-8 pb-10 md:pt-14 md:pb-8 px-8 sm:px-12'>
        {children}
      </div>
    );
}
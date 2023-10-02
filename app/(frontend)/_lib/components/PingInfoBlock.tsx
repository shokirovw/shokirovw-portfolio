export default function PingInfoBlock ({ text }: { text: string; }) {
    return (
      <div className='flex items-center space-x-2 w-fit rounded-2xl py-1 px-4 bg-white/10 relative text-white text-lg text-right'>
          <p>{text}</p>
          {/* <TiWeatherPartlySunny className='absolute inline-flex h-5 w-5 -top-2 -right-2' /> */}
          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-sky-200 opacity-75 -top-1 right-0"></span>
      </div>
    );
  }
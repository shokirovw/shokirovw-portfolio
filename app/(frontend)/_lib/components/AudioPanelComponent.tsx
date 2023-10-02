import { BsFillPlayCircleFill, BsFillPauseCircleFill  } from 'react-icons/bs';
import { BiSolidSkipNextCircle } from 'react-icons/bi';

export default function AudioPanelComponent ({ audio_name, is_audio_playing, playPauseToggle, nextToggle }: {
    audio_name: string; is_audio_playing: boolean; playPauseToggle: Function; nextToggle: Function;
}) {
    return (
      <div className={`flex items-center space-x-3 w-fit rounded-full py-1 px-2 ${is_audio_playing ? "pr-1" : "pr-4"} relative text-white text-lg text-right bg-white/10`}>
        {is_audio_playing ? (
          <>
            <div className='flex space-x-1 items-center rounded-full'>
              <BsFillPauseCircleFill onClick={() => playPauseToggle(false)} className='w-5 h-5' />
              <BiSolidSkipNextCircle onClick={() => nextToggle()} className='w-6 h-6' />
            </div>
            <p className='text-sm xl:text-base'>{audio_name}</p>
            <div className="playing">
              <span className="playing__bar playing__bar1"></span>
              <span className="playing__bar playing__bar2"></span>
              <span className="playing__bar playing__bar3"></span>
            </div>
          </>
        ) : (
          <>
            <div className='flex space-x-1 items-center rounded-full'>
              <BsFillPlayCircleFill onClick={() => playPauseToggle(true)} className='w-5 h-5' />
            </div>
            <p className='text-lg'>Play audio</p>
          </>
        )}
      </div>
      );
}
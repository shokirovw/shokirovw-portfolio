'use client';

import { useEffect, useRef, useState } from 'react';
import AudioPanelComponent from '../components/AudioPanelComponent';

const audio_list: { name: string; src: string; }[] = [
  { name: "Harry Styles - As It Was", src: "https://cdn8.sefon.pro/prev/rTjx5CP8RtDap502o2Fw1Q/1696402559/295/Harry%20Styles%20-%20As%20It%20Was%20%28192kbps%29.mp3" },
  { name: "Jony - Никак", src: "https://cdn2.sefon.pro/prev/wuf4sYvSUPk78R_4l6OedQ/1696401712/330/JONY%20-%20%D0%9D%D0%B8%D0%BA%D0%B0%D0%BA%20%28192kbps%29.mp3" },
  { name: "Ezio's family", src: "/audio.mp3" }
];

export default function OurAudioPanel () {
    const audio_count = audio_list.length;
    const audioRef = useRef<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentAudioIdx, setCurrentAudioIdx] = useState(0);
    const [currentAudio, setCurrentAudio] = useState(audio_list[currentAudioIdx]);

    useEffect(() => {
      setCurrentAudio(audio_list[currentAudioIdx]);
    }, [currentAudioIdx]);

    useEffect(() => {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }, [isPlaying]);

    const handlePlayPause = (x: boolean) => {
      setIsPlaying(x);
    }

    const handleAudioEnd = () => {
      let idx = currentAudioIdx + 1;
      if (idx == audio_count) idx = 0;

      setCurrentAudioIdx(idx);
      audioRef.current.pause();
      setTimeout(() => {
        audioRef.current.load();
        audioRef.current.play();
      }, 1);
    }

    const handleNext = () => {
      handleAudioEnd();
    }

    return (
        <>
        <AudioPanelComponent audio_name={currentAudio.name} is_audio_playing={isPlaying} playPauseToggle={handlePlayPause} nextToggle={handleNext} />
        <audio ref={audioRef} onEnded={handleAudioEnd}>
          <source src={currentAudio.src} type='audio/mpeg' />
        </audio>
        </>
    )
}
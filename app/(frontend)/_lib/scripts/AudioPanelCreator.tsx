'use client';

import { useEffect, useRef, useState } from 'react';
import AudioPanelComponent from '../components/AudioPanelComponent';

const audio_list: { name: string; src: string; }[] = [
  { name: "Harry Styles - As It Was", src: "https://dl2.mp3party.net/online/10444033.mp3" },
  { name: "Jony - Никак", src: "https://dl2.mp3party.net/online/10593121.mp3" },
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
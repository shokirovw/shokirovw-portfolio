'use client';

import { useEffect, useRef, useState } from 'react';


export type PlayerDesignArgType = { audio_name: string; is_audio_playing: boolean; playPauseToggle: (x: boolean) => void; nextToggle: () => void };
export type SongType = { name: string; src: string; };

export interface AudioPlayerCompInterface {
    ({ audio_name, is_audio_playing, playPauseToggle, nextToggle }: PlayerDesignArgType): JSX.Element
}


export default function AudioPlayer ({ PlayerDesign, audio_list }: {
    audio_list: SongType[]; PlayerDesign: ({ audio_name, is_audio_playing, playPauseToggle, nextToggle }: PlayerDesignArgType) => JSX.Element
}) {
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
        <PlayerDesign audio_name={currentAudio.name} is_audio_playing={isPlaying} playPauseToggle={handlePlayPause} nextToggle={handleNext}  />
        <audio ref={audioRef} onEnded={handleAudioEnd}>
          <source src={currentAudio.src} type='audio/mpeg' />
        </audio>
        </>
    )
}
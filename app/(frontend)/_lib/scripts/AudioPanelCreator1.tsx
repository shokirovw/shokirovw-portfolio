'use client';

import AudioPanelComponent from '../components/AudioPanelComponent';
import AudioPlayer, { AudioPlayerCompInterface, SongType } from '../classes/AudioPlayer';

export default function OurAudioPanel1 ({ audio_list }: { audio_list: SongType[] }) {
    let AudioPanelInterfaced = AudioPanelComponent as AudioPlayerCompInterface;

    return (
      <AudioPlayer PlayerDesign={AudioPanelInterfaced} audio_list={audio_list} /> 
    );
}
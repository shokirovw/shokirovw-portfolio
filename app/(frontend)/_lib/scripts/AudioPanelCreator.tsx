import { arrayShuffle } from '../classes/ArrayShuffle';
//import { SongType } from '../classes/AudioPlayer';
import OurAudioPanel1 from './AudioPanelCreator1';
import { SanitySchemaType, groq, sanityFetch } from './SanityHelper';

export const SongsSanitySchema: SanitySchemaType = {
  name: 'songs',
  title: 'Songs',
  type: 'document',
  fields: [
      {
        name: 'song_name',
        title: 'Name',
        type: 'string'
      },
      {
        name: 'song_src',
        title: 'URL',
        type: 'string'
    }
  ]
}

// function fetchSongsData (): Promise<SongType[]> {
//   return sanityFetch(groq`*[_type == "songs"]{
//     "name": song_name,
//     "src": song_src
//   }`);
// }



export default async function OurAudioPanel () {
    let audio_list = arrayShuffle([
      {
        name: "Mozart: Requiem Dies Irae",
        src: "/audio_3.mp3"
      },
      {
        name: "Vivaldi: The Four Seasons, Summer: 3. Presto",
        src: "/audio_1.mp3"
      },
      {
        name: "Tchaikovsky: The Nutracker, IV. Russian Dance",
        src: "/audio_2.mp3"
      }
    ]);
    // Don't forget to implement easter egg (harry styles)

    return <OurAudioPanel1 audio_list={audio_list} />
}
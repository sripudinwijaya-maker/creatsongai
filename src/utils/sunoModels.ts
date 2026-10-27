import { ModelInfo, StudioWorkflowInfo } from '../types';
export const SUNO_MODELS: ModelInfo[] = [
{id:'V6',name:'Suno V6 Flagship',badge:'Kualitas Tertinggi',description:'Generasi terbaru dengan vokal jernih, dinamika instrumen studio, dan stereo imaging.'},
{id:'V6_WILD',name:'Suno V6 Wild',badge:'Kreatif & Eksploratif',description:'Eksperimental dan dinamis, aransemen genre fusion unik.'},
{id:'V6_MINI',name:'Suno V6 Mini',badge:'Cepat & Ringan',description:'Model render cepat untuk sketsa ide musik.'}
];
export const STUDIO_WORKFLOWS: StudioWorkflowInfo[] = [
{id:'generate',name:'Generate Music',iconName:'Sparkles',badge:'Text-to-Music',category:'Creation',description:'Buat lagu dari gaya musik, genre, dan lirik.'},
{id:'cover',name:'Cover Audio',iconName:'Disc3',badge:'Remake Style',category:'Creation',description:'Aransemen ulang lagu sumber ke genre baru.'},
{id:'addVocals',name:'Add Vocals to Beat',iconName:'Mic2',badge:'Isi Vokal',category:'Vocal',description:'Tambahkan vokal AI ke backing track.'},
{id:'mashup',name:'Mashup & Remix',iconName:'Shuffle',badge:'Remix Drop',category:'Remix & Extend',description:'Remix lagu sumber dengan gaya baru.'},
{id:'extend',name:'Cover Extend',iconName:'FastForward',badge:'Panjangkan Durasi',category:'Remix & Extend',description:'Perpanjang durasi lagu.'},
{id:'sampleToSong',name:'Sample to Song',iconName:'Wand2',badge:'Inspo / Humming',category:'Creation',description:'Ubah humming atau demo menjadi lagu.'},
{id:'outro',name:'Outro & Ending',iconName:'Square',badge:'Penutup Lagu',category:'Remix & Extend',description:'Buat bagian penutup lagu.'},
{id:'lyrics',name:'Generate Lirik AI',iconName:'FileText',badge:'Asisten Penulis',category:'AI Tool',description:'Buat lirik sesuai tema dan genre.'}
];
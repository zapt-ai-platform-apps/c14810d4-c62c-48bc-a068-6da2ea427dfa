import { createSignal, createEffect, onMount, Show } from 'solid-js';
import SurahList from './components/SurahList';
import QuranDisplay from './components/QuranDisplay';
import './App.css';

function App() {
  const [surahs, setSurahs] = createSignal([]);
  const [selectedSurah, setSelectedSurah] = createSignal(null);
  const [ayahs, setAyahs] = createSignal([]);
  const [loading, setLoading] = createSignal(false);
  const [error, setError] = createSignal(null);

  const fetchSurahs = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://api.alquran.cloud/v1/surah');
      const data = await response.json();
      setSurahs(data.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch surahs');
    } finally {
      setLoading(false);
    }
  };

  const fetchAyahs = async (surahNumber) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.asad`);
      const data = await response.json();
      const arabicAyahs = data.data[0].ayahs;
      const translationAyahs = data.data[1].ayahs;
      const mergedAyahs = arabicAyahs.map((ayah, index) => ({
        ...ayah,
        translation: translationAyahs[index].text,
      }));
      setAyahs(mergedAyahs);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch ayahs');
    } finally {
      setLoading(false);
    }
  };

  createEffect(() => {
    if (selectedSurah()) {
      fetchAyahs(selectedSurah().number);
    } else {
      setAyahs([]);
    }
  });

  onMount(() => {
    fetchSurahs();
  });

  return (
    <div class="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 p-4 text-gray-800 box-border">
      <div class="max-w-6xl mx-auto h-full flex flex-col">
        <header class="mb-8">
          <h1 class="text-4xl font-bold text-green-600">Quran Reader</h1>
        </header>
        <Show
          when={!loading()}
          fallback={
            <div class="flex justify-center items-center h-full">
              <div class="text-lg font-semibold">Loading...</div>
            </div>
          }
        >
          <Show
            when={!error()}
            fallback={
              <div class="flex justify-center items-center h-full">
                <div class="text-lg font-semibold text-red-500">{error()}</div>
              </div>
            }
          >
            <div class="flex flex-col md:flex-row flex-grow">
              <div class="md:w-1/3 md:pr-4">
                <h2 class="text-2xl font-bold mb-4 text-green-600">Surahs</h2>
                <SurahList surahs={surahs} setSelectedSurah={setSelectedSurah} selectedSurah={selectedSurah} />
              </div>
              <div class="md:w-2/3">
                <Show
                  when={selectedSurah()}
                  fallback={<div class="text-lg font-semibold">Please select a Surah to display its Ayahs.</div>}
                >
                  <h2 class="text-2xl font-bold mb-4 text-green-600">{selectedSurah().englishName}</h2>
                  <QuranDisplay ayahs={ayahs} />
                </Show>
              </div>
            </div>
          </Show>
        </Show>
      </div>
    </div>
  );
}

export default App;
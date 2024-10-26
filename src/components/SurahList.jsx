import { For } from 'solid-js';

function SurahList(props) {
  const { surahs, setSelectedSurah, selectedSurah } = props;
  return (
    <div class="overflow-y-auto max-h-[70vh]">
      <ul class="space-y-2">
        <For each={surahs()}>
          {(surah) => (
            <li
              class={`p-2 cursor-pointer rounded-md hover:bg-green-200 transition duration-200 ease-in-out ${
                selectedSurah() && selectedSurah().number === surah.number ? 'bg-green-300' : ''
              }`}
              onClick={() => setSelectedSurah(surah)}
            >
              <div class="flex justify-between items-center">
                <span class="font-semibold">
                  {surah.number}. {surah.englishName}
                </span>
                <span class="text-xl">{surah.name}</span>
              </div>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
}

export default SurahList;
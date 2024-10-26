import { For } from 'solid-js';

function QuranDisplay(props) {
  const { ayahs } = props;

  return (
    <div class="overflow-y-auto max-h-[70vh] p-4 bg-white rounded-md shadow-md">
      <For each={ayahs()}>
        {(ayah) => (
          <div class="mb-6">
            <p class="text-right text-2xl mb-2 font-arabic leading-relaxed">{ayah.text}</p>
            <p class="text-gray-700">
              <span class="font-semibold">Ayah {ayah.numberInSurah}:</span> {ayah.translation}
            </p>
          </div>
        )}
      </For>
    </div>
  );
}

export default QuranDisplay;
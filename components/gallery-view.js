import { html } from './../lib/z.js@v0.0.8.js';

export const GalleryView = (childInfo) => html`<section
  class="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-4">
  <div class="flex flex-col gap-2 bg-lime-200 overflow-hidden">
    <img
      src="${childInfo.image}"
      alt="${childInfo.name}"
      class="w-full h-96 rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale" />
    <div class="flex p-2 justify-between items-center">
      <span>photos shooting day</span>
      <span class="text-red-700">4 Aug 2024</span>
    </div>
  </div>
  <div class="flex flex-col gap-2 bg-lime-200 overflow-hidden">
    <img
      src="${childInfo.image}"
      alt="${childInfo.name}"
      class="w-full h-96 rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale" />
    <div class="flex p-2 justify-between items-center">
      <span>photos shooting day</span>
      <span class="text-red-700">4 Aug 2024</span>
    </div>
  </div>
  <div class="flex flex-col gap-2 bg-lime-200 overflow-hidden">
    <img
      src="${childInfo.image}"
      alt="${childInfo.name}"
      class="w-full h-96 rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale" />
    <div class="flex p-2 justify-between items-center">
      <span>photos shooting day</span>
      <span class="text-red-700">4 Aug 2024</span>
    </div>
  </div>
  <div class="flex flex-col gap-2 bg-lime-200 overflow-hidden">
    <img
      src="${childInfo.image}"
      alt="${childInfo.name}"
      class="w-full h-96 rounded-t-md transition ease-in-out hover:scale-105 hover:grayscale" />
    <div class="flex p-2 justify-between items-center">
      <span>photos shooting day</span>
      <span class="text-red-700">4 Aug 2024</span>
    </div>
  </div>
</section>`;

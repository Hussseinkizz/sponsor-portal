import { html } from 'z-js-framework';

export const AboutView = (childInfo) => html`
  <div class="flex flex-col gap-2 mt-4">
    <h1 class="flex gap-2 font-bold text-gray-800 text-xl">
      <span class="flex">ID Number:</span>
      <span class="flex">${childInfo.id}</span>
    </h1>
    <h1 class="flex gap-2">
      <span class="flex font-bold text-gray-800 text-xl">Name:</span>
      <span class="flex">${childInfo.name}</span>
    </h1>
    <h1 class="flex gap-2">
      <span class="flex font-bold text-gray-800 text-xl">Level:</span>
      <span class="flex">${childInfo.level}</span>
    </h1>
    <h1 class="flex gap-2">
      <span class="flex font-bold text-gray-800 text-xl">Age:</span>
      <span class="flex">${childInfo.age}</span>
    </h1>
    <p class="flex text-gray-800 border-t-2 border-lime-300 py-2 mt-4">
      ${childInfo.message}
    </p>
    <a
      href="https://fundraise.givesmart.com/f/1cmd/n?vid=16mh0e"
      target="__blank">
      <button
        class="flex px-4 py-2 border border-lime-400 text-lime-700 rounded-md w-fit hover:bg-lime-500 hover:text-black active:scale-95 transition ease-in-out hover:border-lime-800 shadow">
        donate now
      </button>
    </a>
  </div>
`;

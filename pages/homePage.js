import { getRef, html, useEffect, useState } from 'z-js-framework';
import { AboutView } from '../components/about-view';
import { GalleryView } from '../components/gallery-view';
import { ReportsView } from '../components/reports-view';
import { LettersView } from '../components/lettters-view';

const childInfo = {
  image: '/public/IMG_5646-scaled.jpg',
  name: 'Byansi Eric',
  age: '--',
  level: 'Top Class',
  id: '007',
  message:
    'Make Your Contribution and Support Byansi Eric to stay in school. He is a good boy, loves learning, football and very friendly.',
};

export default function HomePage() {
  const [currentView, setCurrentView] = useState('about');

  const homeUI = html`
    <section class="flex flex-col gap-4 w-full h-full p-4">
      <header
        class="flex bg-lime-100 p-4 rounded-md w-full justify-between items-center">
        <h1 class="font-bold text-gray-800 flex text-lg gap-2 items-center">
          <img
            src="/public/hand-heart.svg"
            alt="hand with heart icon"
            class="size-8" />
          <span>Sponser Portal</span>
        </h1>
        <a href="https://fundraise.givesmart.com/f/1cmd/n?vid=16mh0e">
          <button
            class="flex px-4 bg-amber-600 text-white py-2 transition ease-in-out hover:bg-amber-500 active:scale-95 rounded-md --animate-pulse --hover:animate-none">
            Donate Now
          </button>
        </a>
      </header>
      <section class="flex gap-4 w-full">
        <div class="flex gap-2 w-[35%]  bg-lime-100 p-4 rounded-md">
          <img
            src="${childInfo.image}"
            alt="${childInfo.name}"
            class="w-full h-96 rounded-md transition ease-in-out hover:scale-105 hover:grayscale" />
        </div>
        <!-- The Scrolling Part -->
        <div
          class="flex flex-col gap-2 w-[75%] h-[80vh]  bg-lime-100 p-4 rounded-md">
          <nav
            class="flex w-full gap-8 justify-start items-center"
            ref="navItemsRef">
            <button
              onClick="${() => setCurrentView('about')}"
              class="flex font-semibold px-2 py-2 border-b border-lime-900 hover:text-lime-600 transition ease-in-out text-lime-600"
              ref="about">
              About
            </button>
            <button
              onClick="${() => setCurrentView('reports')}"
              class="flex font-semibold px-2 py-2 border-b border-lime-900 hover:text-lime-600 transition ease-in-out"
              ref="reports">
              Reports
            </button>
            <button
              onClick="${() => setCurrentView('letters')}"
              class="flex font-semibold px-2 py-2 border-b border-lime-900 hover:text-lime-600 transition ease-in-out"
              ref="letters">
              Letters
            </button>
            <button
              onClick="${() => setCurrentView('gallery')}"
              class="flex font-semibold px-2 py-2 border-b border-lime-900 hover:text-lime-600 transition ease-in-out"
              ref="gallery">
              Gallery
            </button>
          </nav>
          <div class="flex flex-col gap-2 overflow-y-auto" ref="dynamicView">
            ${AboutView(childInfo)}
          </div>
        </div>
      </section>
    </section>
  `;

  const updateView = (newView) => {
    let target = getRef('dynamicView');
    target.innerHTML = '';
    target.appendChild(newView);
  };

  useEffect(() => {
    let navItemsRef = getRef('navItemsRef');
    let items = navItemsRef.querySelectorAll('button');
    items.forEach((item) => {
      if (item.getAttribute('ref') !== currentView.current()) {
        item.classList.remove('text-lime-600');
      } else {
        item.classList.add('text-lime-600');
      }
    });

    switch (currentView.current()) {
      case 'gallery':
        updateView(GalleryView(childInfo));
        break;
      case 'reports':
        updateView(ReportsView());
        break;
      case 'letters':
        updateView(LettersView());
        break;
      default:
        updateView(AboutView(childInfo));
        break;
    }
  }, [currentView]);

  return homeUI;
}

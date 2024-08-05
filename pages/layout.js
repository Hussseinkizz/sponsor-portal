import { html, getRef, useEffect } from './../lib/z.js@v0.0.8.js';
import HomePage from './homePage.js';

const navItems = [
  {
    name: 'Home',
    route: '/home',
    icon: '/public/home.svg',
  },
  {
    name: 'Uploads',
    route: '/upload',
    icon: '/public/upload-computer-solid.svg',
  },
  {
    name: 'Account',
    route: '/account',
    icon: '/public/user.svg',
  },
];

export default function Layout() {
  // const router = useRouter();
  const handleLogout = () => {
    window.location.href = '/';
  };
  // define ui
  const UI = html`
    <main
      class="flex h-screen items-start justify-start w-full min-h-screen bg-gray-50 overflow-hidden">
      <aside
        class="flex flex-col w-[15%] h-full border-r border-gray-200 bg-slate-100">
        <div class="flex flex-col gap-2 bg-black w-full px-4 py-2">
          <img src="/cropped-logo-1.png" alt="Omuto Logo" class="w-40" />
          <span class="flex text-lime-300 text-sm"
            >Empowering through Education</span
          >
        </div>
        <nav class="flex flex-col gap-2 h-4/5 w-full mt-4" ref="navItemsRef">
          --
        </nav>
        <button
          class="flex gap-2 items-center justify-center bg-lime-600 text-white w-full px-4 py-2 font-semibold hover:bg-lime-500 transition ease-in-out"
          onClick="${handleLogout}">
          Log out
        </button>
      </aside>
      <section class="flex w-[85%] h-full" id="mainView">${HomePage()}</section>
    </main>
  `;

  function loadNavItems(items) {
    const navItemsContainer = getRef('navItemsRef');
    navItemsContainer.innerHTML = '';
    items.forEach((item) => {
      const navItem = html`<z-link
        class="flex gap-2 px-4 py-2 text-gray-800 hover:text-lime-500 transition ease-in-out font-medium justify-start items-center border-b border-gray-200"
        to="${item.route}"
        target="mainView">
        <img src="${item.icon}" alt="icon" class="size-6" />
        <span class="flex">${item.name}</span>
      </z-link>`;
      navItemsContainer.appendChild(navItem);
    });
  }

  useEffect(() => {
    loadNavItems(navItems);
  }, []);

  return UI;
}

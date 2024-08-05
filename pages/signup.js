import { getRef, html, useEffect } from './../lib/z.js@v0.0.8.js';

export default function SignupPage() {
  const signup = html`<main
    class="flex h-screen items-center justify-center w-full min-h-screen bg-gray-50 overflow-hidden">
    <div class="flex flex-col gap-4 bg-lime-200 p-8 rounded-md shadow-md w-96">
      <h1 class="font-bold text-gray-800 flex text-lg gap-2 items-center mb-4">
        <img
          src="/public/hand-heart.svg"
          alt="hand with heart icon"
          class="size-8" />
        <span>Sponsor Portal - Sign Up</span>
      </h1>
      <form class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <label for="username" class="text-sm font-medium text-gray-700"
            >Username</label
          >
          <input
            type="text"
            id="username"
            name="username"
            required
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Provide a username" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="email" class="text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            required
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Enter your email" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="password" class="text-sm font-medium text-gray-700"
            >Password</label
          >
          <input
            type="password"
            id="password"
            name="password"
            required
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
            placeholder="Create a password" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm font-medium text-gray-700"
            >Country</label
          >
          <select
            id="country"
            name="country"
            ref="countryRef"
            required
            class="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500">
            <option value="" disabled>Select your country</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition duration-300 ease-in-out">
          Sign Up
        </button>
      </form>
      <div class="flex justify-center text-sm mt-4">
        <z-link to="/login" class="text-red-800 hover:text-red-900"
          >Already have an account? Log in</z-link
        >
      </div>
    </div>
  </main>`;

  useEffect(() => {
    let target = getRef('countryRef');
    const countries = [
      { name: 'United States', code: 'US', flag: '🇺🇸' },
      { name: 'United Kingdom', code: 'GB', flag: '🇬🇧' },
      { name: 'Canada', code: 'CA', flag: '🇨🇦' },
      { name: 'Australia', code: 'AU', flag: '🇦🇺' },
      { name: 'Germany', code: 'DE', flag: '🇩🇪' },
      { name: 'France', code: 'FR', flag: '🇫🇷' },
      { name: 'Japan', code: 'JP', flag: '🇯🇵' },
      { name: 'Brazil', code: 'BR', flag: '🇧🇷' },
      { name: 'India', code: 'IN', flag: '🇮🇳' },
      { name: 'China', code: 'CN', flag: '🇨🇳' },
      // Todo: Add more countries as needed
    ];

    countries.forEach((country) => {
      const option = document.createElement('option');
      option.value = country.code;
      option.textContent = `${country.flag} ${country.name} (${country.code})`;
      target.appendChild(option);
    });
  }, []);

  return signup;
}

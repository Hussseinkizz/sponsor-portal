import { html, useState } from 'z-js-framework';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (
      email.current() === 'admin@portal.com' &&
      password.current() === '1234'
    ) {
      window.location.href = '/portal';
    } else {
      alert('Invalid Credentials');
    }
  };

  const login = html`
    <main
      class="flex h-screen items-center justify-center w-full min-h-screen bg-gray-50 overflow-hidden">
      <div
        class="flex flex-col gap-4 bg-lime-200 p-8 rounded-md shadow-md w-96">
        <h1
          class="font-bold text-gray-800 flex text-lg gap-2 items-center mb-4">
          <img
            src="/public/hand-heart.svg"
            alt="hand with heart icon"
            class="size-8" />
          <span>Sponsor Portal - Login</span>
        </h1>
        <form
          class="flex flex-col gap-4"
          onSubmit="${(e) => e.preventDefault()}">
          <div class="flex flex-col gap-2">
            <label for="email" class="text-sm font-medium text-gray-700"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              value="${email.current()}"
              onChange="${(e) => setEmail(e.target.value)}"
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
              value="${password.current()}"
              onChange="${(e) => setPassword(e.target.value)}"
              required
              class="p-2 border border-gray-300 rounded-md focus:outline-none
            focus:ring-2 focus:ring-lime-500"
              placeholder="Enter your password" />
          </div>
          <button
            type="submit"
            onClick="${handleLogin}"
            class="bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-900 transition duration-300 ease-in-out">
            Log In
          </button>
        </form>
        <div class="flex justify-between text-sm mt-4">
          <a href="#" class="text-red-800 hover:text-red-900"
            >Forgot password?</a
          >
          <z-link to="/signup" class="text-red-800 hover:text-red-900"
            >Sign up</z-link
          >
        </div>
      </div>
    </main>
  `;

  return login;
}

import { createSignal } from 'solid-js';
import NavLink from './NavLink';

export default function Nav() {
  const [visible, setVisible] = createSignal(false);

  return (
    <div>
      <nav class="bg-white">
        <div class={`hidden md:flex items-center`}>
          <NavLink to="/w">Writing</NavLink>
          <NavLink to="/p">Principle</NavLink>
          <NavLink to="/pro">Project</NavLink>
        </div>
        <button
          class={`${
            visible() ? 'hidden' : 'md:hidden'
          }  text-gray-500 hover:text-gray-700`}
          onClick={() => setVisible(!visible())}
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button
          class={`${
            !visible() ? 'hidden' : 'md:hidden'
          }  text-gray-500 hover:text-gray-700`}
          onClick={() => setVisible(!visible())}
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        </button>
      </nav>
      <nav
        class={`${
          visible() ? 'flex ' : 'hidden'
        } bg-blue-primary border-2 border-brass inset-6 flex-col items-start fixed top-16 bottom-auto  px-4 py-6 mt-1 transition-opacity duration-3000 ease-out`}
      >
        <NavLink to="/w">Writing</NavLink>
        <NavLink to="/p">Principle</NavLink>
        <NavLink to="/pro">Project</NavLink>
      </nav>
    </div>
  );
}

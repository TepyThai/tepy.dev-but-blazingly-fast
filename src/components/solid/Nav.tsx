import { createSignal } from 'solid-js';

type Props = {
  url: string;
};

export default function Nav({ url }: Props) {
  const [visible, setVisible] = createSignal(false);

  return (
    <div>
      <nav>
        <div class={`hidden md:flex items-center`}>
          <a
            href="/w"
            class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
          >
            Writing
          </a>
          <a
            href="/a"
            class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
          >
            About
          </a>
          <a
            href="/c"
            class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
          >
            Contact
          </a>
        </div>
        <button
          class={`${
            visible() ? 'hidden' : 'md:hidden'
          } px-3 py-2 text-gray-500 hover:text-gray-700`}
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
          } px-3 py-2 text-gray-500 hover:text-gray-700`}
          onClick={() => setVisible(!visible())}
        >
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
          </svg>
        </button>
      </nav>
      <div
        class={`${
          visible() ? 'flex' : 'hidden'
        } flex-col items-center fixed right-4 top-14 px-4`}
      >
        <a
          href="/w"
          class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
        >
          Writing
        </a>
        <a
          href="/a"
          class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
        >
          About
        </a>
        <a
          href="/c"
          class="px-3 py-2 font-medium text-gray-700 hover:text-gray-900"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

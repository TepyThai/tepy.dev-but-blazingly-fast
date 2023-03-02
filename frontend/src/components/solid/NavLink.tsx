/** @jsxImportSource solid-js */

import { createSignal, onMount } from 'solid-js';

type Props = {
  to: string;
  type?: 'inline' | 'dropdown';
  children: any;
};

export default function NavLink({ to, type = 'inline', children }: Props) {
  const [active, setActive] = createSignal(false);

  onMount(() => {
    setActive(window.location.pathname === to);
  });

  const textColor = type === 'inline' ? 'text-primary' : 'text-white-ish';
  const activeTextColor = () => (active() ? 'text-brass' : textColor);

  return (
    <a
      href={to}
      class={`w-full px-4 font-medium ${activeTextColor()} border-l-2 md:border-l-0 md:border-b-2 ${
        active() ? `border-brass` : 'border-transparent'
      } hover:border-primary transition duration-300 mb-1 last-of-type:mb-0`}
    >
      {children}
    </a>
  );
}

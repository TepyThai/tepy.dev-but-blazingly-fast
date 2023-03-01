import { createSignal, onMount } from 'solid-js';

type Props = {
  to: string;
  children: any;
};

export default function NavLink({ to, children }: Props) {
  const [active, setActive] = createSignal(false);

  onMount(() => {
    setActive(window.location.pathname === to);
  });

  return (
    <a
      href={to}
      class={`w-full px-4 font-medium text-white border-l-2 md:border-l-0 md:border-b-2 ${
        active() ? 'border-brass text-brass' : 'border-transparent'
      } hover:border-primary transition duration-300 mb-1 last-of-type:mb-0`}
    >
      {children}
    </a>
  );
}

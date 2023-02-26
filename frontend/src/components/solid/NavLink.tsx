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
      class={`px-4 font-medium text-primary border-b-2 ${
        active() ? 'border-primary' : 'border-transparent'
      } hover:border-primary transition duration-300`}
    >
      {children}
    </a>
  );
}

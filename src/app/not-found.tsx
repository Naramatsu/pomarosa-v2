import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-20 text-center animate-fade-in-up">
      <h1 className="font-display text-5xl font-black text-menu-green">
        Sección no encontrada
      </h1>
      <p className="mt-3 text-xl text-cocoa/70">
        Esa parte del menú no existe — vuelve al inicio para verlo todo.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-full bg-menu-green px-7 py-3 font-display font-bold uppercase tracking-wide text-cream transition-colors hover:bg-menu-green-dark"
      >
        Ver el menú
      </Link>
    </div>
  );
}

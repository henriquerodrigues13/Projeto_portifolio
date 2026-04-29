export default function Footer() {
  return (
    <footer className="relative z-10 w-full py-8 text-center">
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
      <p className="text-xs font-light tracking-widest text-zinc-600 uppercase">
        © {new Date().getFullYear()} • Henrique Costa Rodrigues • Crafted with Passion
      </p>
    </footer>
  );
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-8 px-4 text-center">
      <p className="font-body text-sm text-background/60">
        © {new Date().getFullYear()} Destination Fareways LLC. All rights reserved.
      </p>
    </footer>
  );
}

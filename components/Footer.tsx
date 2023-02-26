import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-16 text-xs text-zinc-500">
      &copy; {new Date().getFullYear()} Grégory Gérard &mdash; SIRET
      91037792800015
    </footer>
  );
}

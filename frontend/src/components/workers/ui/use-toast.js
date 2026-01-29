import { useState } from "react";

let listeners = [];
let toasts = [];

function emit() {
  listeners.forEach((l) => l([...toasts]));
}

export function toast({ title, description }) {
  const id = Date.now();

  toasts.push({ id, title, description });
  emit();

  setTimeout(() => {
    toasts = toasts.filter((t) => t.id !== id);
    emit();
  }, 3000);
}

export function useToast() {
  const [state, setState] = useState(toasts);

  if (!listeners.includes(setState)) {
    listeners.push(setState);
  }

  return { toasts: state };
}

import { useState, ReactNode } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>{children}</button>
      <dialog open={isOpen}>
        <h1>Modal</h1>
      </dialog>
    </>
  );
}

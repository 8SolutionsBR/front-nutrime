'use client';
import { Manrope } from 'next/font/google';
import { useRef } from 'react';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Register() {
  const formRef = useRef<any>();

  const handleSubmit = async (form: any) => {
    form.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} method="POST" ref={formRef}>
      <p>teste</p>
    </form>
  );
}

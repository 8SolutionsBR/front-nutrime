'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input/page';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Login() {
  const formRef = useRef<any>();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (form: any) => {
    form.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit} method="POST" ref={formRef} className="grid grid-cols-2">
      <Input type="email" label="E-mail" name="email" customCss="col-span-2 mt-4" />
      <Input type="password" label="Senha" name="senha" customCss="col-span-2 mt-2.5" />

      <div className="col-span-2 flex flex-col md:flex-row md:justify-between">
        <Checkbox name="lembrar" label="Lembrar-me" customCss="mt-2" />
        <Link href="/recuperar-senha" className="flex justify-end mt-2">
          <span
            className={`text-xs md:text-sm text-colors-text_grey font-semibold ${manrope.className} transition duration-200 hover:text-colors-primary dark:text-bg-white dark:hover:text-colors-primary`}
          >
            Esqueceu sua senha ?
          </span>
        </Link>
      </div>

      <Button type="submit" customCss="mt-6 mb-2 col-span-2" loading={loading} disabled={loading}>
        Entrar
      </Button>

      <div className="inline-flex items-center justify-center w-full col-span-2">
        <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-bg-dark" />
        <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-bg-dark dark:bg-zinc-800">
          ou
        </span>
      </div>

      <Button
        type="button"
        color="bg-bg-white"
        customCss="mt-2 mb-4 col-span-2 border dark:border-transparent dark:bg-bg-dark hover:bg-gray-100 dark:hover:bg-zinc-900"
      >
        <FcGoogle className="h-6 flex justify-center w-full" />
      </Button>

      <div
        className={`text-xs md:text-sm text-colors-text_grey font-semibold ${manrope.className} flex justify-center w-full mt-6 gap-1 dark:text-bg-white col-span-2`}
      >
        Não possui uma conta ?
        <span className="text-colors-primary cursor-pointer hover:underline">
          <Link href="/registro">Criar agora</Link>
        </span>
      </div>
    </form>
  );
}

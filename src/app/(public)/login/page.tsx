'use client';
import Button from '@/components/Button';
import Checkbox from '@/components/Checkbox';
import Input from '@/components/Input/page';
import ThemeSwitch from '@/components/ThemeButton';
import { Manrope } from 'next/font/google';
import Link from 'next/link';
import { useRef } from 'react';
import { FcGoogle } from 'react-icons/fc';

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Login() {
  const formRef = useRef<any>();

  const handleSubmit = async (form: any) => {
    form.preventDefault();
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`rounded-xl p-6 dark:bg-zinc-800 bg-white ring-1 ring-inset dark:ring-black/50 ring-slate-200/50 shadow-sm lg:min-w-[500px] lg:min-h-[550px] xl:max-w-[500px] xl:max-h-[600px] h-[80%] w-[80%]`}
      >
        <div className="flex items-center gap-1 justify-center w-full p-6">
          <Link href="/">
            <span
              className={`text-brand font-semibold text-2xl dark:text-gray-100 cursor-pointer ${manrope.className}`}
            >
              Nutri
              <span className="text-colors-primary"> Me</span>
            </span>
          </Link>
        </div>
        <div className="flex w-full justify-end">
          <ThemeSwitch />
        </div>

        <form onSubmit={handleSubmit} method="POST" ref={formRef}>
          <Input type="email" label="E-mail" name="email" />
          <Input type="password" label="Senha" name="senha" />
          <div className="flex justify-between items-center">
            <Checkbox name="lembrar" label="Lembrar-me" />
            <Link href="/login">
              <span
                className={`text-sm text-colors-text_grey font-semibold ${manrope.className} transition duration-200 hover:text-colors-primary dark:text-bg-white dark:hover:text-colors-primary`}
              >
                Esqueceu sua senha ?
              </span>
            </Link>
          </div>

          <div className="mt-6 mb-2">
            <Button type="submit">Entrar</Button>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-full h-px my-6 bg-gray-200 border-0 dark:bg-bg-dark" />
            <span className="absolute px-3 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-bg-dark dark:bg-zinc-800">
              ou
            </span>
          </div>

          <div className="mt-2  mb-4">
            <Button type="button" color="bg-colors-primary/50">
              <FcGoogle className="h-6 flex justify-center w-full" />
            </Button>
          </div>

          <div
            className={`text-sm text-colors-text_grey font-semibold ${manrope.className} flex justify-center w-full mt-6 gap-1 dark:text-bg-white`}
          >
            Não possui uma conta ?
            <span className="text-colors-primary cursor-pointer hover:underline">
              <Link href="/register">Criar agora</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

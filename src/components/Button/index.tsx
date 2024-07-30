import { Manrope } from 'next/font/google';

type ButtonType = 'button' | 'submit' | 'reset';

type ButtonProps = {
  type?: ButtonType;
  children?: React.ReactNode;
  color?: string;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Button({ type, children, color }: ButtonProps) {
  return (
    <button
      type={type}
      className={`py-2 px-8 w-full ${color ? color : 'bg-colors-primary'} rounded-2xl ${manrope.className} dark:text-bg-dark text-white font-bold shadow-sm cursor-pointer transition-colors hover:bg-colors-primary_hover`}
    >
      {children}
    </button>
  );
}

import { Manrope } from 'next/font/google';

type CheckboxProps = {
  name: string;
  label: string;
};

const manrope = Manrope({ weight: ['700', '300', '500'], subsets: ['latin'] });

export default function Checkbox({ name, label }: CheckboxProps) {
  return (
    <div className="flex items-center gap-1">
      <input type="checkbox" name={name} className="w-4 h-4" />
      <label
        className={`text-sm text-colors-text_grey font-semibold ${manrope.className} dark:text-bg-white`}
      >
        {label}
      </label>
    </div>
  );
}

type ButtonProps = {
  children: React.ReactNode;
  classButton?: string;
};

export default function Button({ children, classButton }: ButtonProps) {
  return (
    <button
      className={`${classButton} flex h-[73px] w-[231px] items-center justify-center gap-[10px] rounded-[10px] bg-gradient-to-b from-[#14FF00] to-[#215104] px-[20px] py-[10px] text-[20px] font-[400] text-white`}
    >
      {children}
    </button>
  );
}

type LabelProps = {
  children: React.ReactNode;
};

export default function Label({ children }: LabelProps) {
  return (
    <label htmlFor="" className="font-pathway text-[32px] font-[400]">
      {children}
    </label>
  );
}

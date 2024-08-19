type propsParagraphBottom = {
  children: React.ReactNode;
  classP?: string;
};

export default function ParagraphBottom({
  children,
  classP,
}: propsParagraphBottom) {
  return (
    <p
      className={` ${classP} mx-auto w-[336px] text-center text-[13px] font-[400]`}
    >
      {children}
    </p>
  );
}

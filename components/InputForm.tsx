type InputProps = {
  iconLink: string;
  placeHolder: string;
  width?: number;
};

export default function InputForm({
  iconLink,
  placeHolder,
  width = 294,
}: InputProps) {
  return (
    <input
      className={`h-[56px] w-[${width}px] gap-[10px] rounded-[10px] bg-[center_left_20px] bg-no-repeat py-[10px] pl-[53px] pr-[10px] text-[20px] font-[400] text-[#C3A7A7] placeholder-[#C3A7A7] shadow-input`}
      placeholder={placeHolder}
      style={{ backgroundImage: `url(${iconLink})` }}
    />
  );
}

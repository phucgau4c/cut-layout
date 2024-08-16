type InputProps = {
  iconLink: string;
  placeHolder: string;
  width?: number;
  classInput?: string;
};

export default function InputForm({
  iconLink,
  placeHolder,
  classInput,
}: InputProps) {
  return (
    <input
      className={`${classInput} h-[56px] w-[294px] gap-[10px] rounded-[10px] bg-[center_left_20px] bg-no-repeat py-[10px] pl-[53px] pr-[10px] text-[20px] font-[400] text-[#C3A7A7] placeholder-[#C3A7A7] shadow-input`}
      placeholder={placeHolder}
      style={{ backgroundImage: `url(${iconLink})` }}
    />
  );
}

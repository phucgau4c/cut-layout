type InputProps = {
  iconLink: string;
  placeHolder: string;
  classInput?: string;
};

export default function InputForm({
  iconLink,
  placeHolder,
  classInput,
}: InputProps) {
  return (
    <input
      type="text"
      className={` ${classInput} mb-[20px] h-[56px] w-full min-w-[294px] gap-[10px] rounded-[10px] bg-[center_left_20px] bg-no-repeat py-[10px] pl-[53px] pr-[10px] font-[400] text-[#C3A7A7] placeholder-[#C3A7A7] shadow-input`}
      style={{ backgroundImage: `url(${iconLink})` }}
      placeholder={placeHolder}
    />
  );
}

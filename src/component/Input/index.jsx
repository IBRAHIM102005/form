export function Input({
  value,
  type,
  labelName,
  placeHolder,
  onChange,
  name,
  id,
}) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <input
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </>
  );
}

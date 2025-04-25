const TextArea = ({
  value,
  labelName,
  placeHolder,
  onChange,
  type,
  name,
  id,
}) => {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <textarea
        value={value}
        type={type}
        name={name}
        id={id}
        placeholder={placeHolder}
        onChange={onChange}
      />
    </>
  );
};

export default TextArea;

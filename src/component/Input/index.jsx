export function Input({ value, type, labelName, placeHolder, setState }) {
  return (
    <>
      <label htmlFor="name">{labelName}</label>
      <input
        value={value}
        type={type}
        name="name"
        id=""
        placeholder={placeHolder}
        onChange={(e) => setState(e.target.value)}
      />
      {value}
    </>
  );
}

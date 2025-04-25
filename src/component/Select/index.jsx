export function Select({ labelName, options, onChange, value, id, name }) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      <select id={id} name={labelName} onChange={onChange} value={value}>
        {options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

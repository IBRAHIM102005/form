export function Radio({ array, name, labelName, onChange }) {
  return (
    <>
      <label htmlFor={name}>{labelName}</label>
      {array.map((element, index) => (
        <label key={index}>
          <input type="radio" name={name} value={element} onChange={onChange} />
          {element}
        </label>
      ))}
    </>
  );
}

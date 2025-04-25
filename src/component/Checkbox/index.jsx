export function Checkbox({ array, labelName, onChange }) {
  return (
    <>
      <label>{labelName}</label>
      {array.map((element, index) => (
        <label key={index}>
          <input type="checkbox" value={element} onChange={onChange} />
          {element}
        </label>
      ))}
    </>
  );
}

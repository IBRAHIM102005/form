const TextArea = ({ labelName, placeHolder, setState }) => {
  return (
    <>
      <label htmlFor="name">{labelName}</label>
      <textarea
        type="text"
        name="name"
        id=""
        placeholder={placeHolder}
        onChange={(e) => setState(e.target.value)}
      />
    </>
  );
};

export default TextArea;

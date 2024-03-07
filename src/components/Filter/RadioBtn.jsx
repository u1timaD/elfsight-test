export const RadioBtn = ({item}) => {
  

  return (
    <label>
      <input type="radio" name="status" />
      <span></span>
      <span>{item}</span>
    </label>
  );
};

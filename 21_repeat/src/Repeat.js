function Repeat() {
  const list = ["a", "b", "c", "d", "e"];

  return (
    <>
      <div>
        {list.map((value) => {
          return <div>{value}</div>;
        })}
      </div>
    </>
  );
}
export default Repeat;

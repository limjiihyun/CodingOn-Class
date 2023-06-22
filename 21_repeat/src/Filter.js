function Filter() {
  const animals = ["dog", "cat", "rabbit"];
  return (
    <>
      <div>
        {animals.filter((aaa) => {
          return aaa.length > 3;
        })}
      </div>
    </>
  );
}

export default Filter;

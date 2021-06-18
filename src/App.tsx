const App = (): JSX.Element => {
  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      <h1 className="text-2xl">JSON Server example</h1>
      <form className="flex flex-col p-5 w-4/12">
        <label htmlFor=""></label>
        <textarea className="ring-1 ring-black p-1 mb-3" />
        <button className="p-2 bg-red-300">글 등록하기</button>
      </form>
      <h2 className="text-xl font-semibold">글 목록</h2>
    </div>
  );
};

export default App;

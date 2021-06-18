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
      <div className="w-4/12">
        <h3 className="text-xl font-medium mb-1">Ipsum Loren</h3>
        <p className="overflow-hidden">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default App;

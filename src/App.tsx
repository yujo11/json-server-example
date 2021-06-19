import React, { useEffect, useState } from 'react';
import { getPost, addPost } from './api';

interface Post {
  id: number;
  title: string;
  content: string;
}

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);

  const getPosts = async () => {
    const response = await getPost();
    setPosts(response.data);
  };

  const handleTitleChange = ({ target: { value } }: { target: { value: string } }) => {
    setTitle(value);
  };

  const handleContentChange = ({ target: { value } }: { target: { value: string } }) => {
    setContent(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTitle('');
    setContent('');

    addPost({ title, content });
    getPosts();
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center p-10 ">
      <h1 className="text-2xl">JSON Server example</h1>
      <form className="flex flex-col p-5 w-4/12" onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input id="title" className="ring-1 ring-black p-1 mb-3" value={title} onChange={handleTitleChange} />
        <label htmlFor="content">내용</label>
        <textarea id="content" className="ring-1 ring-black p-1 mb-3" value={content} onChange={handleContentChange} />
        <button className="p-2 bg-red-300">글 등록하기</button>
      </form>
      <h2 className="text-xl font-semibold">글 목록</h2>
      <div className="w-4/12">
        {posts?.map((post) => (
          <div key={post.id}>
            <h3 className="text-xl font-medium mb-1">{post.title}</h3>
            <p className="overflow-hidden">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
function useSelector() {
  throw new Error('Function not implemented.');
}

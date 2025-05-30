import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePostStore, type Post } from "../stores/post.store";

const Home = () => {
  const { posts } = usePostStore()
  const [randPost, setRandPost] = useState<Post | null>(null);

  useEffect(() => {
    if (posts.length > 0) {
      const index = Math.floor(Math.random() * posts.length);
      setRandPost(posts[index]);
    }
  }, [posts]);

  return (
    <div>
      <h1 className="text-center text-3xl">My Game Blog</h1>
      <p className="mt-6 text-xl text-center">Welcome to my blog! Here you can find various video game articles and posts.</p>
      <div>
        <h2 className="text-2xl mt-8 ml-6">Featured Post</h2>
        {posts.length === 0 ? (
          <p className="text-center mt-4">No posts available. Please check back later!</p>
        ) : (
          <div className="px-4 mt-4 mx-4 border rounded-lg hover:shadow-lg hover:scale-101 transition">
            <Link to={`/blog/${randPost?.id}`}>
              <h2 className="mb-2 text-xl">{randPost?.title}</h2>
              <p className="line-clamp-4">{randPost?.content}</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home;
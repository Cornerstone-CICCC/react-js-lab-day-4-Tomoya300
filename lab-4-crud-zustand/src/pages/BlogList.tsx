import { useNavigate, Link } from "react-router-dom"
import { usePostStore } from "../stores/post.store"



const BlogList = () => {

  const navigate = useNavigate()

  const handleCreateBtn = () => {
    navigate("/blog/new")
  }
  
  const { posts } = usePostStore()
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4 py-4 px-8">
        <h1 className="text-2xl">Blogs</h1>
        <button className="border rounded-lg px-4 py-2 hover:scale-110 transition" onClick={handleCreateBtn}>Create</button>
      </div>
      {posts.length === 0 ? (
        <p className="text-center">No posts available</p>
      ) : (
        <ul className="w-full max-w-6xl mx-auto">
          {posts.map((post) => (
            <li key={post.id} className="border rounded-lg py-2 px-4 mb-4 hover:shadow-lg hover:scale-101 transition">
              <Link to={`/blog/${post.id}`} className="block">
                <h2 className="mb-2 text-xl">{post.title}</h2>
                <p className="line-clamp-4">{post.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default BlogList
import { useNavigate, useParams } from "react-router-dom"
import { usePostStore } from "../stores/post.store"
import toast from 'react-hot-toast'

const BlogDetail = () => {

  const { posts, deletePost } = usePostStore()
  const { id } = useParams()
  const thisPost = posts.find((post) => post.id === id)

  const navigate = useNavigate()

  const handleEditBtn = () => {
    navigate(`/blog/edit/${id}`)
  }

  const handleDelete = () => {
    if (thisPost) deletePost(thisPost)
    navigate('/blog')
    toast.success('Post deleted successfully')
    // setTimeout(() => {
    //   alert('Blog deleted successfully')
    // }, 1000);
  }

  if (!thisPost) {
    return <h1 className="text-center">Blog not found</h1>
  }
  
  return (
    <div className="px-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-gray-400">ID: {thisPost.id}</p>
          <h1 className="text-2xl">{thisPost.title}</h1>
        </div>
        <button onClick={handleEditBtn} className="border rounded-lg py-2 px-4">Edit</button>
      </div>
      <p className="mb-4 px-2">{thisPost.content}</p>
      <div>
        <button onClick={handleDelete} className="border rounded-lg py-2 px-4">Delete</button>
      </div>
    </div>
  )
}

export default BlogDetail
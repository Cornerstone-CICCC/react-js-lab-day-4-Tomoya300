import { create } from 'zustand'

export interface Post {
  id: string,
  title: string,
  content: string,
  published: boolean
}

type PostStoreState = {
  posts: Post[],
  addPost: (post: Post) => void,
  updatePost: (post: Post) => void,
  deletePost: (post: Post) => void
}

export const usePostStore = create<PostStoreState>((set) => ({
  posts: [],
  addPost: (post) => {
    set((state) => ({
      posts: [
        ...state.posts,
        post
      ]
    }))
  },
  updatePost: (post) => {
    set((state) => ({
      posts: state.posts.map(p => p.id === post.id 
        ? {...p, title: post.title, content: post.content}
        : p
      )
    }))

  },
  deletePost: (post) => {
    set((state) => ({
      posts: state.posts.filter(p => p.id !== post.id)
    }))
  }
}))
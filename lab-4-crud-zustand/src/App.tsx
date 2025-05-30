import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import AddPost from "./pages/AddPost";
import EditPost from "./pages/EditPost";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />}/>
            <Route path="/blog/new" element={<AddPost />}/>
            <Route path="/blog/edit/:id" element={<EditPost />}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
import {useLoaderData , Link} from "react-router-dom"

const Blog = () => {
  const {posts} = useLoaderData()

  return (
    <ul>
      {
        posts.length > 0 ? (
          posts.map((blogs)=>(
            <li key={blogs.id}>
              <Link to={`/blog/${blogs.id}`}>{blogs.id} - {blogs.title}</Link>
            </li>
          ))
        ) : (<li>Post no encontrado</li>)
      }
    </ul>
  )
}

export default Blog

export const loaderBlog = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")

  if(!res.ok) throw ({
    status: res.status,
    statusText: "No encontrado"
  })
  
  const posts = await res.json()

  return {posts}
} 


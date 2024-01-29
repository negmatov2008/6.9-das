import { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

// import { useEffect, useState } from "react";

// function App() {
//   const [posts, setPosts] = useState();
//   async function getPost() {
//     const res = await fetch("https://jsonplaceholder.org/posts");
//     const data = await res.json();
//     setPosts(data);
//   }
//   useEffect(() => {
//     getPost();
//   });

//   return (
//     <>
//       {posts &&
//         posts.map((post) => (
//           <h1>
//             {post.id}.{post.title}
//           </h1>
//         ))}
//     </>
//   );
// }

// export default App;

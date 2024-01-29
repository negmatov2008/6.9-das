import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [posts, setPosts] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    setPosts(data.products);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(posts);
  return (
    <div>
      <div className=" flex flex-wrap gap-[30px] max-w-[90%]  mx-auto p-6 ">
        {posts &&
          posts.map((post) => (
            <div
              key={post.id}
              className="card w-[300px] max-h-[550px] rounded-lg bg-white shadow-xl gap-2 flex flex-col cursor-pointer"
            >
              <Link to={"/product/" + post.id}>
                <figure>
                  <img
                    className="rounded-t-lg h-[250px]"
                    src={posts && post.images[0]}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body flex flex-col gap-1 p-3 bg-white">
                  <div className="flex max-w-full justify-between items-center">
                    <div className="flex max-w-full gap-2">
                      <span className="text-[16px] text-[#000] font-semibold">
                        {posts && post.category} :
                      </span>
                      <span className="p-1 rounded-lg text-[#fff] bg-red-400 font-bold text-[14px]">
                        {posts && post.brand}
                      </span>
                    </div>
                    <span className="text-[14px] font-medium ">
                      {posts && post.title}
                    </span>
                  </div>
                  <p className="text-green-800 max-w-[100%] font-medium text-[14px]">
                    {posts && post.description}
                  </p>
                  <div className="flex gap-1">
                    <img src="star.svg" alt="" />
                    <span className="text-[#000] font-medium">
                      {posts && post.rating}
                    </span>
                  </div>
                  <span className="flex gap-1 text-[#000] font-medium items-center">
                    How many :
                    <span className="text-[14px] text-red-500">
                      {posts && post.stock}
                    </span>
                  </span>
                  <div className="flex flex-col gap-0 ml-[180px] justify-end items-center">
                    <span className="      line-through text-gray-300 text[12px]">
                      {posts &&
                        Math.ceil(
                          ((post.price + post.price * post.discountPercentage) /
                            100) *
                            12
                        )}
                      0 so'm
                    </span>
                    <span className="text-green-500 text-[18px] mt-[-11px] font-semibold ">
                      {posts && post.price * 12} so'm
                    </span>
                  </div>
                  <button className="text-white p-2 rounded-lg hover:bg-blue-600 mt-4 bg-blue-800">
                    Buy Now
                  </button>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Products;

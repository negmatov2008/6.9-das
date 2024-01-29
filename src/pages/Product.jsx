import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [post, setPost] = useState();
  async function getPost() {
    const res = await fetch("https://dummyjson.com/products/" + id);
    const data = await res.json();
    setPost(data);
  }
  useEffect(() => {
    getPost();
  }, []);
  console.log(post);
  return (
    <div className="mx-[520px] pt-[95px]">
      <div className="carousel carousel-center max-w-[900px] p-4 space-x-4  cursor-pointer max-h-[500px] bg-neutral rounded-box">
        <div className="carousel-item">
          <img src={post && post.images[0]} className="rounded-box " />
        </div>
        <div className="carousel-item">
          <img src={post && post.images[1]} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={post && post.images[2]} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={post && post.images[3]} className="rounded-box" />
        </div>
        <div className="carousel-item">
          <img src={post && post.images[4]} className="rounded-box" />
        </div>
      </div>
    </div>
  );
}

export default Product;

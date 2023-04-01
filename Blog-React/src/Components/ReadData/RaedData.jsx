import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./RaedData.css";
import Footer from "../Footer/Footer";
function RaedData(props) {
  const [post, setPost] = useState();
  const param = useParams();
  console.log(param.id);
  useEffect(() => {
    const getpostbyId = async () => {
      try {
        const { data } = await axios.get(
          `https://react-blog-back-p4qi.onrender.com/v1/post/${param.id}`
        );
        console.log(data);

        setPost(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getpostbyId();
  }, []);

  console.log(post);
  return (
    <div className=" ">
      <Navbar />

      <div className="info">
        <h1 className="all"> Read All Information About this post </h1>
        <h1 className="title">title:{post?.title}</h1>
        <div className="imgpost m-3">
        <img className="" src={post?.photo[0]?.url} />
        </div>
      
        <h1 className="writer">Writer : {post?.user.username}</h1>
        <h1 className="created">Create Date :{post?.createdAt.slice(0,10)}</h1>
        <h1 className="created">Create At :{post?.createdAt.slice(11,16)}</h1>
        <div className="cont mt-2">
          <h2 className="conten">Content</h2>
          <p>{post?.content}</p>
        </div>

  
        <div className="conect">
          To contact With Writer Send Message to{" "}
          <a href="#" className="text-primary">
            {post?.user.email}
          </a>
        </div>
      </div>
     <Footer/>
    </div>
  );
}

export default RaedData;

import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import AddPost from "../AddPost/AddPost";
import axios from "axios";
import Welcome from "./../Welcome/Welcome";
import Footer from "../Footer/Footer";

function Home() {
  const [posts, setposts] = useState([]);
  const navigate = useNavigate();
  const sendPost = (post) => {
    navigate(`/RaedData/${post._id}`);
    console.log(post._id);
  };

  useEffect(() => {
    const getposts = async () => {
      try {
        const { data } = await axios.get(
          "https://react-blog-back-p4qi.onrender.com/v1/post"
        );
        setposts(data.data.reverse());
      } catch {
        //handle error
        console.log("error");
      }
    };

    getposts();
  }, []);

  console.log(posts);
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <div className="totalPost">
      <p>Total post in blog</p>
      <h1>{posts.length} Posts</h1>
      </div>
      
      <div className="btntoadd ">
        <button className="btn btn-accent">
          <Link to="/AddPost">Add New Post</Link>
        </button>
      </div>
      <div className="posts">
        <div className="sectionpost container">
          {posts.map((singlepost) => (
            <div className="singlepost shadow-xl" key={singlepost._id}>
              <div className="card flex">
                <div className="dataprofile flex">
                  <div className="w-10 rounded-full postinfo ">
                    <img src="../../../public/images/Pngtree—user.png"/>
                  </div>
                  <span>Writer : {singlepost.user.username}</span>
                </div>
                <div className="cardimg">
                  <img src={singlepost.photo[0]?.url} />
                </div>
                <div className="carddata">
                  <h2 className="text-1xl font-bold">Title : {singlepost.title}</h2>

                  <div className="ptext">
                    <p>{singlepost.content}</p>
                  </div>

                  <div className="datadate flex">
                <div><p>Create Date {singlepost.createdAt.slice(0,10)}</p>
                    <p>Create At {singlepost.createdAt.slice(11,16)} clock</p></div>
                    
                    <button
                      onClick={() => {
                        sendPost(singlepost);
                      }}
                      className="btn read ml-2 mt-5 "
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;

import React from "react";
import "../AddPost/AddPost.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../Input";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

function AddPost() {
  // const { postid } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState("");

  const [loading, setLoading] = useState(false);

  const formData = new FormData();
  formData.append("title", title);
  formData.append("content", content);
  formData.set("photo", photo);

  const token = localStorage.getItem("access_token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  function handleImage(e) {
    if (e.target.files.length) {
      setPhoto(e.target.files[0]);
    }
  }

  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    await axios
      .post(
        "https://react-blog-back-p4qi.onrender.com/v1/post",
        formData,
        config
      )
      .then(() => {
        toast("add succsefully");
        navigate("/home");
      })
      .finally(() => setLoading(false));
  };
  return (
    <div>
      <Navbar />

      <div className="data">
        <video
          autoplay="true"
          muted
          loop
          id="myVideo"
          src="https://cdn.dribbble.com/uploads/39421/original/963b4f8739cbdf86ca3f3a23245efd18.mp4?1657824985"
        >
          Your browser does not support HTML5 video.
        </video>

        
        <div className="add">
        <div className="addpostform m-auto">
          <h1 className="text-center block font-bold mt-5">Add your bost</h1>
          <form onSubmit={handlesubmit}>
            <Input
              name="title"
              label="Title"
              value={title}
              placeholder="Enter the post title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              required
            />
            <Input
              name="photo"
              label="photo"
              onChange={handleImage}
              type="file"
              placeholder="Upload image"
            />
            <div className="form-control form-text">
              <label className="labelfortext" htmlFor="textbody">body</label>
              <textarea
                id="textbody"
                name="content"
                label="content"
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                required
                placeholder="Enter the post body"
              ></textarea>
            </div>

            <br />
            <button
              type="submit"
              className="btn btn-accent mx-auto block"
              disabled={loading}
            >
              {!loading ? <span>Add Post</span> : <Loader />}
            </button>
          </form>
        </div>
     
        </div>
      </div>

      
    </div>
  );
}
export default AddPost;

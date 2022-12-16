import React from "react";
import { ImMap } from "react-icons/im";
import { RiMailOpenFill } from "react-icons/ri";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../actions/posts";

export default function ContactFrom() {
  const [postData, setPostData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };
  return (
    <div className="contact-container">
      <div className="left">
        <h2 className="shy-head">don't be shy !</h2>
        <p className="shy-text">
          Feel free to get in touch with me. I am always open to discussing new
          projects, creative ideas or opportunities to be part of your visions.
        </p>
        <div className="info-block">
          <ImMap className="col-icon" />
          <div className="con-info">
            <p>address point</p>
            <p>TAPS COLONY, Boisar , Maharashtra, 401504 </p>
          </div>
        </div>
        <div className="info-block">
          <RiMailOpenFill className="col-icon" />
          <div className="con-info">
            <p>mail me</p>
            <p>deepatel6128@gmail.com</p>
          </div>
        </div>
        <div className="info-block">
          <FaPhoneSquareAlt className="col-icon" />
          <div className="con-info">
            <p>call me</p>
            <p>+91 7875295787</p>
          </div>
        </div>
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input"
              value={postData.name}
              onChange={(e) =>
                setPostData({ ...postData, name: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input"
              value={postData.email}
              onChange={(e) =>
                setPostData({ ...postData, email: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              type="text"
              placeholder="Your Message"
              className="input msg"
              value={postData.message}
              onChange={(e) =>
                setPostData({ ...postData, message: e.target.value })
              }
            />
          </div>
          <div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

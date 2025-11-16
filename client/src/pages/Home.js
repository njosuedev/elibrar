import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  const postStyle = {
    padding: "10px",
    background: "#fdfcfcff",
    border: "0.5px solid #e4e3e3ff",
    width: "35vw",
    justifySelf: "center",
    marginTop: "5px",
    borderRadius: "8px",
  };

  const titleStyle = {
    textTransform: "capitalize",
    marginBottom: "5px",
  };

  const textStyle = {
    paddingLeft: "9px",
  };

  const usernameStyle = {
    color: "blue",
    fontSize: "0.9rem",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    marginTop: "10px",
    borderRadius: "5px",
  };

  // Friendly "time ago" function
  const timeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date; // milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (seconds < 60) return "Now";
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;

    // Older than a week → show weekday
    return date.toLocaleDateString("en-US", { weekday: "short" }); // Mon, Tue, etc.
  };

  return (
    <>
      {listOfPosts.map((post, index) => (
        <div key={index} style={postStyle}>
          <h3 style={titleStyle}>{post.title}</h3>
          <p style={textStyle}>{post.postText}</p>
          {post.image && (
            <img
              src={`http://localhost:3001${post.image}`}
              alt={post.title}
              style={imageStyle}
            />
          )}
          <p>{timeAgo(post.createdAt)}</p>
          <small style={usernameStyle}>{post.username}</small>
        </div>
      ))}
    </>
  );
}

export default Home;

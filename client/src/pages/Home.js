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
    width: "30vw",
    justifySelf: "center",
    marginTop: "5px",
    borderRadius: "8px",
  };

  const titleStyle = {
    textTransform: "capitalize",
    marginBottom: "5px",
  };

  const textStyle = {
    paddingLeft: "9px"
  }

  const usernameStyle = {
    color: "blue",
    fontSize: "0.9rem",
  };

  return (
    <>
      {listOfPosts.map((post, index) => (
        <div key={index} style={postStyle}>
          <h3 style={titleStyle}>{post.title}</h3>
          <p style={textStyle}>{post.postText}</p>
          <p>{post.createdAt}</p>
          <small style={usernameStyle}>{post.username}</small>
        </div>
      ))}
    </>
  );
}

export default Home;

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <p>Loading...</p>;

 return (
  <div>
    <div
      className="post-hero"
      style={{
        backgroundImage: `url(https://picsum.photos/seed/${post.id}/1600/900)`
      }}
    >
      <Link to="/" className="post-back">← Back</Link>
      <h1>{post.title}</h1>
    </div>

    <div className="post-container">
      <p className="post-body">{post.body}</p>
    </div>
  </div>
);
}

export default PostDetail;
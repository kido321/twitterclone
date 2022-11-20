import React, { useEffect, useState } from "react";
import "./feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post.js";
import {
  doc,
  setDoc,
  collection,
  addDoc,
  onSnapshot,
  getDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import FlipMove from "react-flip-move";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Feed() {
  const [{ user }, dispatch] = useStateValue();
  const [posts, setposts] = useState([]);

  useEffect(() => {
    (async () => {
      const docRef = collection(db, "posts");
      const q = query(docRef, orderBy("timestamp", "desc"));
      await onSnapshot(q, (snapshot) => {
        setposts(snapshot.docs.map((doc) => doc.data()));
      });
    })();
  }, []);
  //console.log(posts);
  return (
    <div className="feed">
      <div className="feed_header">
        <h1>Home</h1>
      </div>
      <TweetBox />

      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
    </div>
  );
}

export default Feed;

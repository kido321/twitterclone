import React, { useState } from "react";
import "./tweetbox.css";
import { Button, Avatar } from "@mui/material";
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
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const sendTweet = (e) => {
    e.preventDefault();

    (async () => {
      const docRef = collection(db, "posts");
      await addDoc(docRef, {
        text: tweetMessage,
        image: tweetImage,
        displayName: user.displayName,
        verified: true,
        avatar: user?.photoURL,
        timestamp: serverTimestamp(),
      });
      setTweetImage("");
      setTweetMessage("");
    })();
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src={user?.photoURL} />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetbox_imageinput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetbox_tweetbutton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;

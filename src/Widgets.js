import React from "react";
import "./widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchOutlined from "@mui/icons-material/SearchOutlined";
function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchOutlined className="widgets_searchIcon" />
        <input placeholder=" search_item" type="text" />
      </div>
      <div className="widgets_wcontainet">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1587877870860484610"} />
        <TwitterTweetEmbed tweetId={"1588267732298043392"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="kidus addisu"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"http://facebook.com/google"}
          options={{ text: "react-js is awsome", via: " kidus Addisu" }}
        />
      </div>
    </div>
  );
}

export default Widgets;

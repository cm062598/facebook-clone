import React, { useState } from "react";

// Styles
import { newsFeedContainer } from "./Newsfeed.module.scss";

// Components
import Stories from "./Stories/Stories";
import CreatePost from "./CreatePost/CreatePost";
import CreateRoom from "./CreateRoom/CreateRoom";
import Post from "./Post/Post";
import CreatePostPopup from "./CreatePostPopup/CreatePostPopup";

// React Firebase Hooks
import { useCollection } from "react-firebase-hooks/firestore";

// Firebase
import db from "../../firebase";

const Newsfeed = ({ user }) => {
  const [posts, loading, error] = useCollection(
    db.collection("Posts").orderBy("datePosted", "desc")
  );

  const [popupCreatePost, setPopupCreatePost] = useState(false);

  return (
    <div className={newsFeedContainer}>
      <Stories user={user} />
      <CreatePost user={user} setPopupCreatePost={setPopupCreatePost} />
      <CreateRoom user={user} />

      {loading && (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

      {posts?.docs.map((doc) => (
        <React.Fragment key={doc.id}>
          {(doc.data().caption ||
            (doc.data().image && doc.data().image !== "waiting")) && (
            <Post
              docId={doc.id}
              user={user}
              message={doc.data().caption}
              comments={doc.data().comments}
              datePosted={doc.data().datePosted}
              image={doc.data().image}
              name={doc.data().name}
              profilePic={doc.data().profilePic}
              reactors={doc.data().reactors}
              userID={doc.data().userID}
            />
          )}
        </React.Fragment>
      ))}

      <CreatePostPopup
        user={user}
        popupCreatePost={popupCreatePost}
        setPopupCreatePost={setPopupCreatePost}
      />
    </div>
  );
};

export default Newsfeed;

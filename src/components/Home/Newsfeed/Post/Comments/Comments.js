import React, { useState } from "react";

// Styles
import {
  commentSection,
  allMessage,
  inputComment,
  imageContainer,
  textAreaWrapper,
} from "./Comments.module.scss";

// Firebase
import firebase from "firebase/app";
import "firebase/firestore";
import db from "../../../../firebase";

// Compornents
import Comment from "./Comment";

const Comments = (props) => {
  const { toShowComment, comments, uid, displayName, photoURL, docId } = props;

  // State
  const [yourComment, setYourComment] = useState("");

  const addComment = (e) => {
    e.preventDefault();

    if (yourComment.trim().length > 0) {
      const docRef = db.collection("Posts").doc(docId);
      docRef.set(
        {
          comments: firebase.firestore.FieldValue.arrayUnion({
            name: displayName,
            message: yourComment.trim(),
            photoURL,
            uid,
            timestamp: Date.now(),
          }),
        },
        { merge: true }
      );
    }

    setYourComment("");
  };

  const removeComment = (pangalan, mensahe, letrato, id, time) => {
    const docRef = db.collection("Posts").doc(docId);
    docRef
      .set(
        {
          comments: firebase.firestore.FieldValue.arrayRemove({
            name: pangalan,
            message: mensahe,
            photoURL: letrato,
            uid: id,
            timestamp: time,
          }),
        },
        { merge: true }
      )
      .then((e) => {
        setYourComment("");
      });
  };

  return (
    <>
      {toShowComment && (
        <div className={commentSection}>
          {comments.length > 0 && (
            <div className={allMessage}>
              {comments.map((comment, index) => (
                <Comment
                  key={index}
                  comment={comment}
                  index={index}
                  uid={uid}
                  removeComment={removeComment}
                />
              ))}
            </div>
          )}

          <form className={inputComment} onSubmit={addComment}>
            <div className={imageContainer}>
              <img src={photoURL} alt="" />
            </div>
            <div className={textAreaWrapper}>
              <input
                value={yourComment}
                onChange={(e) => setYourComment(e.target.value)}
                placeholder="Write a comment..."
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Comments;

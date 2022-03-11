import { async } from '@firebase/util';
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'; 
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth, db } from '../firebase-config';
import {FaTrash} from "react-icons/fa";




function Home({isAuth}) {
  const [postLists, setPostList] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async() =>{
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({
        ...doc.data(), id:doc.id
      })));
    };
    getPosts();
  });

  const deletePost = async (id) => {

    const postDoc = doc(db, "posts", id )
    await deleteDoc(postDoc)
  };

  return (
    <div className="homePage">
      {postLists.map((post) => {
        return (
            <div className="post">
              <div className="postHeader">
                  <div className="title">
                    <h1>{post.title}</h1>
                  </div>
                  
                  <div className="deletePost">
                    {isAuth && post.author.id === auth.currentUser.uid && (
                    <button onClick={() => {
                        deletePost(post.id);
                    }}> <FaTrash/>   </button>
                  )}
                  
                  </div>
              </div>


              <div className="postTextContainer">
                {post.postText}
              </div>
              {/* <h3>@{post.author}</h3> */}

            </div>
        );
      })}
    </div>
  )
}

export default Home
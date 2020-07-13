import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import FormComponent from "./FormComponent";
import RecordComponent from "./RecordComponent";
import {
  addAction,
  updateAction,
  deleteAction,
  getPostAction,
} from "../redux/action/post.action";

function ContainerCoponent(props) {
  const { addPost, updatePost, deletePost, getPost, data=[] } = props;
  const [selectedPost, setselectedPost] = useState({});


  const editHandler = (post, id) => {
   setselectedPost({
     id ,
     ...post
   });

  };

  const deleteHandler = (post) => {
    deletePost(post);
  };

  const submitHandler = (data, index) => {
    console.log(data);
    if (data.id) {
      updatePost(data, index);
    } else {
      addPost(data);
    }
    setselectedPost({})
  };

  useEffect(() => {
    getPost();
  }, []);
 
  return (
    <div>
      <FormComponent submitHandler={submitHandler} data={selectedPost}></FormComponent>
      <h1>Total Post {data ? data.length : 0}</h1>
      <RecordComponent
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        post={data}
      ></RecordComponent>
    </div>
  );
}

const mapStateToProps = (state) => ({
  data: state.post.list,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: (payload) => dispatch(addAction(payload)),
  updatePost: (payload) => dispatch(updateAction(payload)),
  deletePost: (payload) => dispatch(deleteAction(payload)),
  getPost: () => dispatch(getPostAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCoponent);

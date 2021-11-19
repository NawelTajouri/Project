import React, { useState } from "react";
import Modal from "react-modal";

// import './Add.css';
import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/actions/postActions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: '40%',
    transform: "translate(-50%, -50%)",
    color: 'red',
    
  },

};


Modal.setAppElement("#root");

function AddNewPost() {
    const [newPost, setNewPost] = useState({
        title: "",
        message: "",
        keyword:"",
        picture:"",
      });
  

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  function setModalIsOpenToTrue() {
    setModalIsOpen(true);
  }
  function setModalIsOpenToFalse() {
    setModalIsOpen(false);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const dispatch = useDispatch()
  const handleChange = (e) =>
    setNewPost({ ...newPost, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newPost.title);
        formData.append('message', newPost.message);
        formData.append('keyword', newPost.keyword);
        formData.append('picture',newPost.picture);
    
        dispatch(createPost(formData))
        {
            setModalIsOpenToFalse();
          }
     
        // history.push("/dashboard");
    }
    const handlePhoto = (e) => {
      setNewPost({...newPost, picture: e.target.files[0]});
    }

  return (
    <div className="add-movie">
      <div className="heading">
      <button onClick={setModalIsOpenToTrue}>Add New post</button>
      </div>

      <div className="modal-movie">
      <Modal isOpen={modalIsOpen} style={customStyles}>
        
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Create post Title
      </label>
      <br />
      <input type="text" className="custom-input" name="title" value={newPost.title} onChange={handleChange}/>
      <br />
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Create post
      </label>
      <br />
      <input type="text" className="custom-input" name="message" value={newPost.message} onChange={handleChange}/>
      <br />
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Enter Keyword
      </label>
      <br />
      <input type="text" className="custom-input" name="keyword" value={newPost.keyword} onChange={handleChange}/>
      <br />
      <label className="custom-file-label" htmlFor="inputGroupFile01">
        Add Photo
      </label>
      <br />
      <input
        type="file"
        className="custom-file-input"
        name="picture"  onChange={handlePhoto}
      />
      <br />
        
    <Link to="/profile"  ><button type="submit"
          onClick={handleSubmit}
        >
          Add
        </button></Link>
        
        <Link to="/profile"  > <button onClick={closeModal}>close</button></Link>
       
      </Modal>
      </div>
      
    </div>
  );
}

export default AddNewPost;
import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function BlogPost(props){
    //modal - showPost 불러오기 위한 코드
    const [modalShow, setModalShow] = React.useState(false);
  
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return(
      <>
        <div id="blogContents" className="blogList" onClick={handleShow} style={{cursor:"pointer"}}>
          <h4>{props.posts.title}</h4>
          <p>{props.posts.contents}</p>
          <hr id="middle_hr"/>
          <p id="time_p">{props.posts.up_date} {props.posts.up_time}</p>
          <hr id="bottom_hr"/>
        </div>
        
        <Modal
            show={show}
            onHide={handleClose}
  
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.posts.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{props.posts.contents}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </>
      
    )
  }

  export default BlogPost;
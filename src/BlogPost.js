import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import './BlogPost.css'

import {useNavigate} from "react-router-dom";

function BlogPost(props){
    const navigate = useNavigate();

    //modal - showPost 불러오기 위한 코드
    const [show, setShow] = useState(false);

    let [showList, setShowList] = useState("");
    let [showCard, setShowCard] = useState("");
    let [showCanvas, setShowCanvas] = useState("");

    let style = props.listStyle;

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    let num = props.posts.num;
    let id = props.posts.id;
    let title = props.posts.title;
    let contents = props.posts.contents;
    let media = props.posts.media;
    let up_date = props.posts.up_date;
    let up_time = props.posts.up_time;
    let table = props.posts.whichTable;

    //let imgsrc = props.posts.media.data;

    let sendData = [num, id, title, contents, media, up_date, up_time, table];   

    setTimeout(
      () =>{
        if(style == "list"){
          setShowList('d-block blogList');
          setShowCard("d-none cards");
          setShowCanvas("d-none canvas");
        }else if(style == "card"){
          setShowList('d-none blogList');
          setShowCard("d-inline-flex p-2 h-20 align-items-stretch cards");
          setShowCanvas("d-none canvas");
        }else if(style == "canvas"){
          setShowList('d-none blogList');
          setShowCard("d-none cards");
          setShowCanvas("d-block p-3 h-25 canvas");
        }else{
          
        }
      }
    )

    

    return(
      <>
        <div id="blogContents" className={showList} onClick={handleShow} style={{cursor:"pointer"}}>
          <h4>{title}</h4>
          <p>{contents}</p>
          <hr id="middle_hr"/>
          <p id="time_p">{up_date} {up_time}</p>
          <hr id="bottom_hr"/>
        </div>

        <div className={showCard} onClick={handleShow} style={{display:'inline-flex', cursor:"pointer"}}>
          <Card className="card" style={{ width: '18rem', height:'25%' }}>
            <Card.Img variant="top" src={media} style={{width:'100%', height:'10em', background:'gray'}} alt="no Image" />
            <Card.Body>
              <Card.Title style={{height:'3em', fontSize:'1em', fontWeight:'bolder', overflow:'hidden', textOverflow:'ellipsis'}}>{title}</Card.Title>
              <Card.Text style={{height:'8em', overflow:'hidden' ,textOverflow:'ellipsis'}}>
                {contents}
              </Card.Text>
              <hr />
              <p id="time_p">{up_date} {up_time}</p>
            </Card.Body>
          </Card>
          {/*<h4>{title}</h4>
          <p>{contents}</p>
          <p id="time_p">{up_date} {up_time}</p>*/}
        </div>

        <div className={showCanvas} onClick={handleShow} style={{cursor:"pointer"}}>
          <Card className="d-flex flex-row">
            <Card.Img variant="top" src={media} style={{width:'30%', height:'20em', background:'gray'}} alt="no Image" />
            <Card.Body style={{width:'70%'}}>
              <Card.Title style={{height:'3em', fontSize:'1em', fontWeight:'bolder', overflow:'hidden', textOverflow:'ellipsis'}}>{title}</Card.Title>
              <Card.Text style={{height:'8em', overflow:'hidden' ,textOverflow:'ellipsis'}}>
                {contents}
              </Card.Text>
              <hr />
              <p id="time_p">{up_date} {up_time}</p>
            </Card.Body>
        </Card>
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
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div id="tableInfo">
                <p>저장된 테이블 : {table}</p>
                <hr />
              </div>
              <div id="modalContents" style={{whiteSpace: 'pre-line'}}>
                <p>{contents}</p>
              </div>
              <div id="modalImage">
                <img src={`data:image/png;base64${media.data}`} style={{maxHeight:"700px", maxWidth:"700px"}} alt="no Image" />
              </div>
              {console.log(media)}
            </Modal.Body>
            <Modal.Footer>
              <div id="modalFooter">
                <form action="http://localhost:3307/api/delete" method="POST">
                  ID : <input type="text" name="confirmId" />
                  <input type="hidden" name="num" value={num} />
                  <input type="hidden" name="id" value={id} />
                  <input type="hidden" name="table" value={table} />
                  <Button type="submit">삭제하기</Button>
                </form>
              </div>
              
              <Button onClick={() => {
                navigate("/updata", { state : {value: sendData}});
              }}>수정하기</Button>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
      </>
      
    )
  }

  export default BlogPost;
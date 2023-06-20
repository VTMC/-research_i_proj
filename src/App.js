import logo from './logo.svg';
import './App.css';

//Navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//NavLeft - offCanvas
import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

//Modal - showPost.js
import Modal from 'react-bootstrap/Modal';

//blog list 불러오기
import homePost from './homePost';
import noticePost from './noticePost';
import studyPost from './studyPost';
import dailyPost from './dailyPost';
import BlogPost from './BlogPost';

import Editing from './editing';
import axios from 'axios';

//react-router-dom 불러오기
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  const today = new Date();
  let hour = today.getHours().toString().padStart(2, '0');
  let minute = today.getMinutes().toString().padStart(2, '0');
  let second = today.getSeconds().toString().padStart(2, '0');

  let year = today.getFullYear().toString().padStart(4, '0');
  let month = (today.getMonth()+1).toString().padStart(2, '0');
  let date = today.getDate().toString().padStart(2, '0');

  //updata를 위한 변수
  
  /*let [sendedNum, setSendedNum] = useState('nothing');
  let [sendedTitle, setSendedTitle] = useState('nothing');
  let [sendedContents, setSendedContents] = useState('nothing');
  let [sendedMedia, setSendedMedia] = useState([]);
  let [sendedUp_date, setSendedUp_date] = useState('nothing');
  let [sendedUp_time, setSendedUp_time] = useState('nothing');
  let [sendedTable, setSendedTable] = useState('nothing');
  let sendedNum;
  let sendedId;
  let sendedTitle;
  let sendedContents;
  let sendedMedia;
  let sendedUp_date;
  let sendedUp_time;
  let sendedTable;*/

  console.log(homePost);
  console.log(noticePost);
  console.log(studyPost);
  
  const [show, setShow] = useState(false);
  var [table, setTable] = useState('nothing');

  var [upDate, setUpDate] = useState('nothing');
  var [upTime, setUpTime] = useState('nothing');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [listStyle, setListStyle] = useState('list');
  let [contentPos, setContentPos] = useState("");

  setTimeout(() => {
    setUpTime(`${hour}:${minute}:${second}`);
    setUpDate(`${year}/${month}/${date}`);
  },1000);

  //각 블로그 리스트 불러오기
  
  /*var [homePosts] = useState(homePost);
  console.log(homePosts);
  var [noticePosts] = useState(noticePost);
  console.log(noticePosts);
  var [studyPosts] = useState(studyPost);
  console.log(studyPosts);
  var [dailyPosts] = useState(dailyPost);*/

  

  /*window.addEventListener('scroll', function(){
    const menu = document.getElementById('leftNav');
    let scrollY = this.scrollY;

    if(scrollY < 10){
      menu.style.opacity = 0;
    }else{
      menu.style.opacity = 0.8;
    }
  });*/

  function toTop(){
    window.scrollTo(0,0);
  }
  
  return (
    <div className="App">

      <header id="navigation_bar">
        <>
          <Navbar bg="primary" variant="dark">
            <Container style={{display:'flex', justifyContent:'space-between'}}>
              <Link to="/home" style={{justifyContent:'start' , textDecoration:'none', fontSize:'larger' ,fontWeight:'bolder'}}><b>VTMC's BLOG</b></Link>
              
              <p id="clock" style={{marginRight:'3em'}}>{upDate} {upTime}</p>

              <Button variant="primary"><Link to="/input" style={{textDecoration:'none', fontWeight:'bolder'}}><p>글쓰기</p></Link></Button>

              {/*<Nav activeKey="/home" className="me-auto" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}> 
                <Nav.Link><Link to="/notice"><p>Notice</p></Link></Nav.Link>
                <Nav.Link><Link to="/study"><p>Study</p></Link></Nav.Link>
                <Nav.Link><Link to="/daily"><p>Daily</p></Link></Nav.Link>
                <Nav.Link><Link to="/news"><p>News</p></Link></Nav.Link>
                <Nav.Link><Link to="/community"><p>Community</p></Link></Nav.Link>
                </Nav>*/}
            </Container>
          </Navbar>
        </>
      </header>
      <section id="mainContents">
        <nav id="leftNav">
            <Button variant="primary" onClick={handleShow}>
              Menu
            </Button>

            <Offcanvas show={show} onHide={handleClose} width="10em">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title><h1><b>VTMC's BLOG</b></h1></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link><Link to="/notice"><p>Notice</p></Link></Nav.Link>
                  <Nav.Link><Link to="/study"><p>Study</p></Link></Nav.Link>
                  <Nav.Link><Link to="/daily"><p>Daily</p></Link></Nav.Link>
                  <Nav.Link><Link to="/news"><p>News</p></Link></Nav.Link>
                  <Nav.Link><Link to="/community"><p>Community</p></Link></Nav.Link>
                </Nav>

                <p id="clock">TIME : {upDate} {upTime}</p>

                <div id="selectButton">
                  <button id="leftBt" onClick={() => setListStyle('list')}><img src={require("./icons/list.png")} /></button>
                  <button id="centerBt" onClick={() => setListStyle('card')}><img src={require("./icons/card.png")} /></button>
                  <button id="rightBt" onClick={() => setListStyle('canvas')}><img src={require("./icons/canvas.png")} /></button>
                </div>
              </Offcanvas.Body>
            </Offcanvas>

            <button id="onTopButton" onClick={toTop}>맨 위로 ▲</button>       
        </nav>
        
        <div id="selectButton">
          <button id="leftBt" onClick={() => {setListStyle('list'); setContentPos('text-left');}}><img src={require("./icons/list.png")} /></button>
          <button id="centerBt" onClick={() => {setListStyle('card'); setContentPos('text-center');}}><img src={require("./icons/card.png")} /></button>
          <button id="rightBt" onClick={() => {setListStyle('canvas'); setContentPos('text-center');}}><img src={require("./icons/canvas.png")} /></button>
        </div>
        {/*<button onClick={loadNoticePost()} >api 호출하기</button>*/}

        <div id="mainContents">
            <Routes>
              <Route path="/home" element={
                <div class={contentPos} id="homeDiv">
                  {console.log("/home")}
                  {console.log(homePost)}
                  {homePost.map(post => (
                    <BlogPost posts = {post} key={post.id} listStyle={listStyle} />
                  ))}
                  {console.log("First")}
                </div>
              } />
              <Route path="/notice" element={
                <div class={contentPos} id="noticeDiv">
                  {noticePost.map(post => (
                      <BlogPost posts = {post} key={post.id} listStyle={listStyle} />
                  ))}
                  {console.log("second")}
                </div>
              } />
              <Route path="/study" element={
                <div class={contentPos} id="studyDiv">
                  {console.log("/study")}
                  {studyPost.map(post => (
                    <BlogPost posts = {post} key={post.id} listStyle={listStyle} />
                  ))}
                  {console.log("Third")}
                </div>
              } />
              <Route path="/daily" element={
                <div class={contentPos} id="dailyDiv">
                  {console.log("/daily")}
                  {dailyPost.map(post => (
                    <BlogPost posts = {post} key={post.id} listStyle={listStyle} />
                  ))}
                </div>
              } />
              <Route path="/news" element={
              <div class={contentPos} >
                <h1>News</h1> 
              </div>} />
              <Route path="/community" element={
              <div id="communityDiv">
                <h1>Community</h1>
                <b><p style={{color:'red'}}>※ 커뮤니티 블로그 사이트는 현재 지원되지 않습니다.</p></b>
              </div>
              } />
              <Route path="/input" element={
                <div id="inputDiv">
                  <h1><b>INPUT PAGE</b></h1>
                  <hr />
                  <form id="inputForm" action={`http://localhost:3307/api/input${table}`} method="POST">
                    <div id="setInputTitle">
                        <input type="radio" name="table" onClick={() => setTable(table = "notice")} value={table} /><label>notice</label>
                        <input type="radio" name="table" onClick={() => setTable(table = "study")}  value={table} /><label>study</label>
                        <input type="radio" name="table" onClick={() => setTable(table = "daily")}  value={table} /><label>daily</label>
                        <p>선택한 분야 : {table}</p>
                    </div>
                    
                    <div id="inputDiv_title">
                      <p>제목 : </p> <input type="text" name="title" />
                    </div>

                    <div id="inputDiv_title">
                      <p>ID : </p> <input type="text" name="id" />
                    </div>
                    <div id="inputDiv_contents">
                      <textarea name="contents" form="inputForm" cols="50" rows="20"></textarea>
                    </div>
                    <div id="inputDiv_images">
                      <input type="file" name="media" accept="image/*" />
                    </div>
                    <input type="hidden" name="up_date" value={upDate} />
                    <input type="hidden" name="up_time" value={upTime} />
                    <div id="inputDiv_submit">
                      <input type="submit" value="보내기"/>
                    </div>
                  </form>
                </div>
              } />
              <Route path="/updata" element={<Editing />} />
              
              <Route path="/wrongInput" element={
                <div id="wrongInput">
                  <img src={require('./icons/cancel.png')} />
                  <h1>잘못된 입력입니다!</h1>
                  <hr />
                  <p>잘못된 값을 입력했습니다. 다시 확인해주세요.</p>
                </div>
               } />
               <Route path="/wrongProcess" element={
                <div id="wrongInput">
                  <img src={require('./icons/cancel.png')} />
                  <h1>잘못된 접근입니다!</h1>
                  <hr />
                  <p>잘못된 접근방법 입니다. 다시 확인해주세요.</p>
                </div>
               } />
               <Route path="/correctProcess" element={
                <div id="correctProcess">
                  <img src={require('./icons/checked.png')} />
                  <h1>제대로 진행됐습니다!</h1>
                  <hr />
                  <p>제대로 입력 및 진행이 됐습니다!</p>
                </div>
               } />
            </Routes>
            
            
        </div>
      </section>
    </div>
  );

}

export default App;

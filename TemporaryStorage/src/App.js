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
//import { Loading } from './loading';

//import { homePost, noticePost, studyPost } from './loading';

//import axios from 'axios';

//react-router-dom 불러오기
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

/*let homePost=[];
let noticePost = [];
let studyPost = [];

axios.all([axios.get("http://localhost:3307/api/home"), 
    axios.get("http://localhost:3307/api/rp_notice"),
    axios.get("http://localhost:3307/api/rp_study")])
    .then(
        axios.spread((res1, res2, res3) => {
            for(var i = 0; i < res1.data.length; i++){
                console.log(res1.data[i]);
                homePost.push(res1.data[i]);
            }

            for(var i = 0; i < res2.data.length; i++){
                console.log(res2.data[i]);
                noticePost.push(res2.data[i]);
            }

            for(var i = 0; i < res3.data.length; i++){
                console.log(res3.data[i]);
                studyPost.push(res3.data[i]);
            }

            console.log(homePost);
            console.log(noticePost);
            console.log(studyPost);
        })
    ).catch((err) => console.log(err));*/

function wait(sec) {
  let start = Date.now(), now = start;
  while (now - start < sec * 1000) {
      now = Date.now();
  }
}

/*export function Setting(){
  homePost = Loading("home");
  console.log(homePost);

  noticePost = Loading("rp_notice");
  console.log(noticePost);

  studyPost = Loading("rp_study");
  console.log(studyPost);
}*/

function App() {

  //let [homePost, setHomePost] = useState([])

  console.log(homePost);
  console.log(noticePost);
  console.log(studyPost);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //각 블로그 리스트 불러오기
  
  /*var [homePosts] = useState(homePost);
  console.log(homePosts);
  var [noticePosts] = useState(noticePost);
  console.log(noticePosts);
  var [studyPosts] = useState(studyPost);
  console.log(studyPosts);
  var [dailyPosts] = useState(dailyPost);*/

  

  window.addEventListener('scroll', function(){
    const menu = document.getElementById('leftNav');
    let scrollY = this.scrollY;

    if(scrollY < 10){
      menu.style.opacity = 0;
    }else{
      menu.style.opacity = 0.8;
    }
  });

  function toTop(){
    window.scrollTo(0,0);
  }

  
  return (
    <div className="App">

      <header id="navigation_bar">
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
              <Navbar.Brand href="/home">VTMC's BLOG</Navbar.Brand>
              <Nav className="me-auto">"
                <Nav.Link href="/notice">Notice</Nav.Link>
                <Nav.Link href="/study">Study</Nav.Link>
                <Nav.Link href="/daily">Daily</Nav.Link>
                <Nav.Link href="/news">News</Nav.Link>
                <Nav.Link href="/community">Community</Nav.Link>
              </Nav>
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
                <Offcanvas.Title><b>VTMC's BLOG</b></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey="/home" className="flex-column">
                  <Nav.Link href="/home">Home</Nav.Link>
                  <Nav.Link href="/notice">Notice</Nav.Link>
                  <Nav.Link href="/study">Study</Nav.Link>
                  <Nav.Link href="/daily">Daily</Nav.Link>
                  <Nav.Link href="/news">News</Nav.Link>
                  <Nav.Link href="/community">Community</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>

            <button id="onTopButton" onClick={toTop}>맨 위로 ▲</button>       
        </nav>
        
        {/*<button onClick={loadNoticePost()} >api 호출하기</button>*/}

        <div id="mainContents">
            <Routes>
              <Route path="/home" element={
                <div id="homeDiv">
                  {console.log("/home")}
                  {console.log(homePost)}
                  {homePost.map(post => (
                    <BlogPost posts = {post} key={post.id} />
                  ))}
                  {console.log("First")}
                  {console.log(dailyPost)}
                  {dailyPost.map(post => (
                      <BlogPost posts = {post} key={post.id} />
                  ))}
                </div>
              } />
              <Route path="/notice" element={
                <div id="noticeDiv">
                  {noticePost.map(post => (
                      <BlogPost posts = {post} key={post.id} />
                  ))}
                  {console.log("second")}
                </div>
              } />
              <Route path="/study" element={
                <div id="studyDiv">
                  {console.log("/study")}
                  {studyPost.map(post => (
                    <BlogPost posts = {post} key={post.id} />
                  ))}
                  {console.log("Third")}
                </div>
              } />
              <Route path="/daily" element={
                <div id="dailyDiv">
                  {console.log("/daily")}
                  {dailyPost.map(post => (
                    <BlogPost posts = {post} key={post.id} />
                  ))}
                </div>
              } />
              <Route path="/news" element={
              <div>
              <h1>News</h1> 
              </div>} />
              <Route path="/community" element={
              <div id="communityDiv">
                <h1>Community</h1>
                <b><p style={{color:'red'}}>※ 커뮤니티 블로그 사이트는 현재 지원되지 않습니다.</p></b>
              </div>
              } />
            </Routes>
        </div>
      </section>
    </div>
  );

}

export default App;

import axios from 'axios';
import { Loading } from './loading';

//import React, { useEffect, useState } from 'react';

/* let studyPost = [
    {
        id:0,
        title: "첫  studyPost 글",
        contents: "이 글은 제 첫 블로그 글입니다.",
        up_date: "2023-05-23",
        up_time: "11:40 PM"
    },

    {
        id:1,
        title: "다음 studyPost 글",
        contents: "리스트 구현이 가능한지 알기 위한 과정입니다.",
        up_date: "2023-05-23",
        up_time: "11:40 PM"
    },

    {
        id:2,
        title: "아무개",
        contents: "아무 글이나 써보고 있는 중, 괜찮은지도 확인중",
        up_date: "2023-05-23",
        up_time: "11:40 PM"
    },

    {
        id:3,
        title: "Lorem Ipsum",
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        up_date: "2023-05-23",
        up_time: "11:40 PM"
    },

    {
        id:4,
        title: "Lorem Ipsum",
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        up_date: "2023-05-23",
        up_time: "11:40 PM"
    },

    {
        id:5,
        title: "Lorem Ipsum",
        contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        up_date: "2023-05-23",
        up_time: "11:41 PM"
    }
    
] */

let studyPost = [];

/*axios.get("http://localhost:3307/api/rp_study")
.then(async(res) => {
    for(var i = 0; i < res.data.length; i++){
        console.log(res.data[i]);
        studyPost.push(res.data[i]);
    }

    console.log(studyPost);
}).catch((err) => {
    console.log(err);
})*/

studyPost = Loading("rp_study");

/*function studyPost(){
    const [studyPosts, setStudyPosts] = useState([{
        id: '',
        title: '',
        contents: '',
        media: '',
        up_date: '',
        up_time: ''
    }])

    useEffect(async() => {
        try{
            const res = await axios.get("http://localhost:3307/api/rp_study")
            const _studyPosts = await res.data.map((rowData) => (
                {
                    id: rowData.id,
                    title: rowData.title,
                    contents: rowData.contents,
                    media: rowData.media,
                    up_date: rowData.up_date,
                    up_time: rowData.up_time
                })
            )
            setStudyPosts(studyPosts.concat(_studyPosts))
        }catch(e){
            console.error(e.message)
        }
    }, [])

    console.log(studyPosts);
    return studyPosts
}*/

export default studyPost;
import axios from 'axios';

export function Loading(table){
    let result = [];

    axios.get("http://localhost:3307/api/"+table)
    .then((res) => {
        for(var i = 0; i < res.data.length; i++){
            console.log(res.data[i]);
            result.push(res.data[i]);
        }
        console.log(result);
    }).catch((err) => {
    console.log(err);
    })

    console.log(result);

    return result;
}

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
    ).catch((err) => console.log(err));

export { homePost, noticePost, studyPost }*/
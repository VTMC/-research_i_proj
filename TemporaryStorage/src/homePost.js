import axios from 'axios';

let homePost=[];

axios.get("http://localhost:3307/api/home")
.then((res) => {
    for(var i = 0; i < res.data.length; i++){
        console.log(res.data[i]);
        homePost.push(res.data[i]);
    }

    console.log(homePost);
}).catch((err) => {
    console.log(err);
})

export default homePost;
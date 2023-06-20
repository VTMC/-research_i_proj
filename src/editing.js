import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './editing.css';

function Editing(){
    const location = useLocation();

    /*let [sendedData, setSendedData] = useState([]);

    if(location.state.value != null){
        setSendedData(location.state.value);
    }*/

    let sendedData = location.state.value;

    let num  = sendedData[0];
    let id = sendedData[1];
    let [title, setTitle] = useState(sendedData[2]);
    let contents = sendedData[3];
    //let media = sendedData[4];
    let up_date = sendedData[5];
    let up_time = sendedData[6];
    let table = sendedData[7];
    
    console.log(location.state.value);

    const changedTitle = (e) => {
        setTitle(e.target.value);
    }

    return(
        <div id="editDiv">
            <h1><b>UPDATE PAGE</b></h1>
            <hr />
            <form id="editForm" action={'http://localhost:3307/api/updata'} method="POST">
                <input type="hidden" name="num" value={num} />
                <input type="hidden" name="table" value={table} />

                <div id="setEditTable">
                    <p>선택했던 분야 : {table}</p>
                </div>
                    
                <div id="EditDiv_title">
                    <p>제목 : </p> <input type="text" name="title" value={title} onChange={changedTitle}/>
                </div>

                <div id="EditDiv_title">
                    <p>ID : </p><input type="text" name="confirmId" /> 
                    <input type="hidden" name="id" value={id}/>
                </div>
                <div id="EditDiv_contents">
                    <textarea name="contents" form="editForm" cols="50" rows="20" >{contents}</textarea>
                </div>
                <div id="EditDiv_images">
                    <input type="file" name="media" accept="image/*" />
                </div>
                <p>날짜 : {up_date} / 시간:{up_time}에 등록됐음.</p>
                <input type="hidden" name="up_date" value={up_date} />
                <input type="hidden" name="up_time" value={up_time} />
                <div id="EditDiv_submit">
                    <input type="submit" value="보내기"/>
                </div>
            </form>
        </div>
    )
}

export default Editing;
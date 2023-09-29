import { useState } from "react";
export default function Word({word}){
    const [isDone, setDone] = useState(word.isDone);
    const toggleDone = () => {
        fetch("http://localhost:3001/words/" + word.id ,{
            method:"PUT",
            headers:{
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                ...word,
                isDone:!isDone
            }),
        }).then(res=>{
            if(res.ok){
                setDone(!isDone);
            }
        })
    }
    const [isShow, setShow] = useState(false);
    const toggleShow = () => {
        setShow(!isShow);
    }
    const [listDel,setDel] = useState(word);
    const del = () => {
        if(window.confirm('Are you finished with memorising?')){
            fetch("http://localhost:3001/words/" + word.id, {
                method:"DELETE",
            }).then(res=>{
                if(res.ok){
                    setDel({id:0});
                    window.location.reload();
                }
            })
        }
    }

    return(
        <tr key={word.id}>
            <td>
                <input type='checkbox' checked={isDone} onChange={toggleDone} />
            </td>
            <td>{word.eng}</td>
            <td>{isShow ? "" : word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻 {isShow ? "보기" : "숨기기"}</button>
                <button className="delBtn">삭제</button>
            </td>
        </tr>
    )
}
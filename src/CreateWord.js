import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
import { useRef, useState } from "react";

export default function CreateWord(){
    const days = UseFetch("http://localhost:3001/days");
    const history = useHistory();
    const [isLoading, setLoading] = useState(false);

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    const onSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:3001/words", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        }).then(res => {
            if(res.ok){
                alert('list update succeed');
                history.push('/word/' + dayRef.current.value);
            }
        })
    }

    return(
        <form onSubmit={onSubmit}>
            <label>
                Eng
                <input type="text" placeholder="word" ref={engRef} />
            </label>
            <label>
                Kor
                <input type="text" placeholder="단어" ref={korRef} />
            </label>
            <label>
                Day
                <select ref={dayRef}>
                    {days.map(day => {
                        return(
                            <option key={day.id} value={day.day}>
                                {day.day}
                            </option>
                        )
                    })}
                </select>
            </label>
            <p>
                <button type="submit"> 저장 </button>
            </p>
        </form>
    )
}
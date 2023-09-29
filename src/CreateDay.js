import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import UseFetch from "./UseFetch";
export default function CreateDay(){
    const days = UseFetch("http://localhost:3001/days");
    const history = useHistory();

    const onSubmit = () => {
        fetch("http://localhost:3001/days", {
            method:"POST",
            headers:{
                "Content-type" : "application/json"
            },
            body: JSON.stringify({
                day : (days.length + 1)
            })
        }).then(res => {
            if(res.ok){
                alert('day creation succeed')
                history.push('/');
            }
        })
    }

    return(
        <div>
            <h2>현재 차 수 : {days.length}</h2>
            <button type="submit" onClick={onSubmit}>날짜 추가</button>
        </div>
    )
}
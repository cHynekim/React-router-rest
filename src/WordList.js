// import { useState } from 'react';
// import data from './database/words.json';
// import {useParams} from 'react-router-dom';
// const WordList = () => {
//     const {day} = useParams();
//     //url로 부터 넘어온 :day 정보 받아 저장
//     const [isDone, setDone] = useState(false);
//     const toggleDone = () => {
//         setDone(!isDone);
//     }
//     let list = data.words.filter(
//         (word) => word.day === Number(day)
//     );
//     const [isShow, setShow] = useState(false);
//     const toggleShow = () => {
//         setShow(!isShow);
//     }
//     return(
//         <div>
//             <table>
//                 <tbody>
//                     {list.map(
//                         (word) => {
//                             return(
//                                 <tr key={word.id}>
//                                     <td>
//                                         <input type='checkbox' checked={isDone ? true : false} onChange={toggleDone} />
//                                     </td>
//                                     <td>{word.eng}</td>
//                                     <td>{isShow ? "" : word.kor}</td>
//                                     <td>
//                                         <button onClick={toggleShow}>뜻 {isShow ? "보기" : "숨기기"}</button>
//                                     </td>
//                                 </tr>
//                             )
//                         }
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default WordList;

// import data from './database/words.json';
import { useState } from 'react';
import {useParams} from 'react-router-dom';
import UseFetch from './UseFetch';
import Word from './Word';

const WordList = () => {
    const {day} = useParams();
    //url로 부터 넘어온 :day 정보 받아 저장

    const list = UseFetch("http://localhost:3001/words?day=" + day);

    return(
        <div>
            <h2>Day {day}</h2>
            <table>
                <tbody>
                    {list.map(
                        (word) => {
                            return(
                                <Word word={word} />
                            )
                        }
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default WordList;
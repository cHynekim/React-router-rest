// import data from './database/days.json';
// import {Link} from 'react-router-dom';

// const DayList = () => {
//     return(
//         <div>
//             <ul className='dayList'>
//                 {data.days.map((day) => {
//                     return(
//                         <li key={day.id}>
//                             {/* {day.day} */}
//                             <Link to={'/word/' + day.day}>
//                                 Day {day.day}
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//         </div>
//     );
// }

// export default DayList;

import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import UseFetch from './UseFetch';

const DayList = () => {
    // const [day, setDays] = useState([]);
    // useEffect(()=>{
    //     console.log('from json server');
    //     fetch("http://localhost:3001/days")
    //         .then((res)=>res.json())
    //         .then((data)=>setDays(data))
    // });
    const days = UseFetch("http://localhost:3001/days");
    return(
        <div>
            <ul className='dayList'>
                {days.map((day) => {
                    return(
                        <li key={day.id}>
                            {/* {day.day} */}
                            <Link to={'/word/' + day.day}>
                                Day {day.day}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default DayList;
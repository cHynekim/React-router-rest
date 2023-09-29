import {Link} from 'react-router-dom';
const Empty = () =>{
    return(
        <div>
            <h1>잘못된 접근입니다</h1>
            <Link to={'/'}>메인으로</Link>
        </div>
    )
}

export default Empty;
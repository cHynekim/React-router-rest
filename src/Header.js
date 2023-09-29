import { Link } from "react-router-dom/cjs/react-router-dom.min"
export default function Header(){
    return(
        <header>
            <h1>
                <a href="/">Vocabulary</a>
            </h1>
            <div>
                <Link to="/create#">단어 추가</Link>
                <Link to="/create_day#">Day 추가</Link>
            </div>
        </header>
    )
}
import { Link } from "react-router-dom"
import { useState } from "react"

export const Landing2 = () => {
    const [name, setName] = useState("");
    return <div>
        <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
        <Link
            to={`/room/?name=${name}`}>Join</Link>
    </div>
}
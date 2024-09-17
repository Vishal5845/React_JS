import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page could not found.</p>
            <Link to = "/">Back To HomePage...</Link>
        </div>
    )
}
 
export default NotFound;
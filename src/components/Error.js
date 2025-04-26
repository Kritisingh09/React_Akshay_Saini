import { useRouteError } from "react-router-dom";
const Error= ()=>{
    const err= useRouteError();
    return (
        <div>
        <h2>An Error has occured {err.status}</h2>
        </div>

        
    )
}
export default Error;
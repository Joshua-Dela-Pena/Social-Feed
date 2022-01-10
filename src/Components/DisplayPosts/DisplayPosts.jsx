import LikesDislikes from "../LikesDislikes/LikesDislikes";
import "./DisplayPosts.css"
const DisplayPosts = (props) => {
    return ( 
        <table className="text" className="table">
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td className="move"><b><i>{entry.name}</i></b></td><tr>
             </tr>
             <td className="moveAsWell"> -  ~ {entry.post} ~ </td>
             <LikesDislikes />
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;
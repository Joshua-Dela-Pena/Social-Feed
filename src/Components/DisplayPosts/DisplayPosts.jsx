import LikesDislikes from "../LikesDislikes/LikesDislikes";

const DisplayPosts = (props) => {
    return ( 
        <table className="text" className="table">
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td><b><i>{entry.name}</i></b></td><tr>
             </tr>
             <td>{entry.post}</td>
             <td><LikesDislikes /></td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;
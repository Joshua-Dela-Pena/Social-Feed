const DisplayPosts = (props) => {
    return ( 
        <table className="text">
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td><i>Name</i>: {entry.name}</td><tr>
             </tr>
             <td>{entry.post}</td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;
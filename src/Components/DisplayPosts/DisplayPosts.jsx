const DisplayPosts = (props) => {
    return ( 
        <table className="text">
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td><b><i>{entry.name}</i></b> -</td><tr>
             </tr>
             <td>- {entry.post}</td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayPosts;
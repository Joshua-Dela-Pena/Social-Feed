const DisplayEntries = (props) => {
    return ( 
        <table className="text">
        <thead>
          <br></br>
          <tr>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
         {props.parentEntries.map((entry) => {
           return (
             <tr> 
             <td>Name: {entry.name}</td>
             <td>Post: {entry.post}</td>
             </tr>
            );
         })}
        </tbody>
      </table>
     );
}
 
export default DisplayEntries;
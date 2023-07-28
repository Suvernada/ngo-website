// const UserData = ({users}) => {
//     console.log(users);
//     let arr;
//     // const renderData=()=>{
//     //     let arr=[];
//     //     arr=
//     // }

//     return (
//         <>
//             {
//                 for(const key in users){
//                     if (users.hasOwnProperty(key)) {
//                       const item = users[key];
//                      return (
//                         <tr key={id}>
//                             {/* <td>{id}</td> */}
//                             <td>{item.name}</td>
//                             <td><a href={item.link}/></td>
                        
//                         </tr>
//                     )
//                     }
//                 })

//             }
//         </>
//     )
// }
// export default UserData;
const UserData = ({ users }) => {
    // console.log(users);
    
    return (
      <>
        {Object.keys(users).map((key) => {
          const item = users[key];
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{item.name}</td>
              <td>
                <a href={item.link}>Click Here </a>
              </td>
            </tr>
          );
        })}
      </>
    );
  };
  
  export default UserData;
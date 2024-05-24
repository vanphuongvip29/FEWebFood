// import { useContext, useState } from 'react';
// import { UserContext } from './MainApp';

// const UserLogin = () => {

//     const [userName, setUserName] = useState()
//     const [pass, setPass] = useState() 

//     const [user, dispatch] = useContext(UserContext)

   
    
//     const login = (e) => {
//         e.preventDefault()

//         if(userName === "admin" && pass === "123")
//         {
//             dispatch({
//                 "type": "login",
//                 "payload": {
//                     "name": "Tran Van Phuong",
//                     "username": "admin",
//                     "nickName": "Xinx"
//                 }
//             })
//             console.log("success")
//         }
//         else
//             console.log("fail")
//     }

//     if(user == null)
//         return(
//             <>
//                 <h1 style={{color:"blue", textAlign:"center"}}>DANG NHAP</h1>
//                 <form onSubmit={login}>
//                     <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='Nhap username....'/>
//                     <input type='password' value={pass} onChange={(e) => setPass(e.target.value)} placeholder='Nhap pass...'/>
//                     <input type="submit" value="DANG NHAP"/>
//                 </form>
//             </>
//         )
//     return (
//         <>
//             <h1>Da Dang nhap voi username {user.username}</h1>
//             <h1>Da Dang nhap voi username {user.nickName}</h1>
//         </>
//     )
// }
// export default UserLogin
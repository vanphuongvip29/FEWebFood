// import { useContext } from "react"
// import { UserContext } from "./MainApp"

// const UserInfo = () =>{

//     const [user, dispatch] = useContext(UserContext)
//     if(user == null)
//         return <h1>CHUA DANG NHAP</h1>
    
//     const logout = () =>{
//         dispatch({"type": "logout"})
//     }
//     return(
//         <>
//             <h1 style={{color:"blue", textAlign:"center"}}>THONG TIN NGUOI DUNG</h1>
//             <h2>WELLCOME {user.name}</h2>
//             <button onClick={logout}>LOGOUT</button>
//         </>
//     )
// }
// export default UserInfo
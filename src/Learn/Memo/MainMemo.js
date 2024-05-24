// import { useCallback, useMemo, useState } from "react"
// import MyItemMemo from "./Item"

// const toTal = (n) =>{
//     console.info(`toTal: ${Math.random()}`)
//     let s = 0;
//     for(let i = 1; i <= n; i++)
//         s += Math.pow(i, 2)
//     return s
// }

// const MainMemo = () => {

//     const [counter, setCounter] = useState(0)
//     const [items, setItems] = useState(["TASK 1", "TASK 2"])

//     const addItem = useCallback( () =>{
//         setItems([...items, `Task ${Math.random()}`])
//     }, [items])

    
//     const initValue = useMemo(()=>toTal(9999999), [counter])

//     return(
//         <>
//             <h1>MAIN MEMO</h1>
//             <h2>MY VALUE: {initValue}</h2>

//             <button onClick={() => setCounter( counter + 1)}>your Click : {counter}</button>
//             <MyItemMemo i={items} add={addItem}/>
//         </>
//     )
// }
// export default MainMemo
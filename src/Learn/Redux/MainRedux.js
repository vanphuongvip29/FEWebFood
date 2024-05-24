import { useDispatch, useSelector } from "react-redux"

const MainRedux = () =>{

    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()

    return(
        <>
            <h1>MY REDUX: {counter}</h1>
            <button onClick={()=> dispatch({"type": "inc"})}>INC</button>
            <button onClick={()=> dispatch({"type": "dec"})}>DEC</button>
        </>
    )
}

export default MainRedux
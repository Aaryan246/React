import { useEffect , useState } from "react"
import Todoitem from "./Todoitem"
import {db} from "../firebase"
import {collection , onSnapshot , addDoc} from 'firebase/firestore';
import { Button } from "@material-ui/core";

const  Todos =() => {
    const [todos, settodos] = useState([])
    useEffect(async() => {
        const todosCol = collection(db,'todos')
        const querySnapshot = await onSnapshot(todosCol)
        let docs = []
        const unsubsribe = await onSnapshot(todosCol, (querySnapshot)=>{
            const docs=[];
            querySnapshot.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
            })
            settodos(docs)
        })
        return ()=>{
            unsubsribe()
        }
    }, [])

    const addTodo= async () =>{
        const docRef = await addDoc(collection(db, "todos"),{
            completed:false,
            todo:""
        });
    }
    return (
        <div>
            {todos.map(todoitem=>{
                return <Todoitem completed={todoitem.completed} todo={todoitem.todo} id={todoitem.id} />
            })}
            <div className="add-button">
                <Button onClick={addTodo}>Add To do</Button>
            </div>
        </div>
    )
}

export default Todos
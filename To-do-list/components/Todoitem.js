import { deleteDoc, doc, setDoc } from "@firebase/firestore"
import { Checkbox, TextField, IconButton } from "@material-ui/core"
import {DeleteOutline} from "@material-ui/icons"
import { db } from "../firebase"
import "./Todoitem.css"
const Todoitem = (props) => {
    const handleCompleted = async()=>{
        await setDoc(doc(db,'todos',props.id),{
            completed: !props.completed,
            todo:props.todo
        })
    }
    const handleChangeText = async(e)=>{
        await setDoc(doc(db,'todos',props.id),{
            completed: props.completed,
            todo:e.target.value
        })
    }
    const handleDeleteDocument = async()=>{
        await deleteDoc(doc(db,'todos',props.id))
    }
    return (
        <div className="root">
            <Checkbox name="Completed" checked={props.completed} color ='primary' onClick={handleCompleted}/>
            <div className="content">
              <TextField onChange={handleChangeText} name='todo' value={props.todo} multiline style={{width:'100%'}}/>
              <IconButton onClick={handleDeleteDocument}>
                  <DeleteOutline/>
              </IconButton>
            </div>
        </div>
    )
}
export default Todoitem
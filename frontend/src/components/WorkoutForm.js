import { useState } from "react";
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const WorkoutForm = () => {
    const {dispatch } = useWorkoutsContext()
    const [title, setTitle] =useState('')
    const [load, setLoad] =useState('')
    const [reps, setReps] =useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault() 

        const workout = {title, load,  reps}

        const response = await fetch('http://localhost:4000/api/workouts/',{
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const jsonForm = await response.json()
        if(!response.ok ){
            setError(jsonForm.error)
            setEmptyFields(jsonForm.emptyFields )
        }

        if(response.ok){
            setTitle('')
            setLoad('')
            setReps('')
            setError(null)
            setEmptyFields([])
            console.log('new workout added' , jsonForm)
            dispatch({type : 'CREATE_WORKOUT', payload: jsonForm})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>
                Add a New workout
            </h3>
            <label>Exercise Titke :</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} className={emptyFields.includes('title') ? 'error' : ''}/>
            <label>Load (Kg) :</label>
            <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} className={emptyFields.includes('load') ? 'error' : ''}/>
            <label>No of Reps :</label> 
            <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} className={emptyFields.includes('reps') ? 'error' : ''}/>

            <button>Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default WorkoutForm;
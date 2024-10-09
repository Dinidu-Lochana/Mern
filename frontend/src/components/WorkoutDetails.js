import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

const WorkoutDetails = ({ workout }) => {
    const { dispatch} = useWorkoutsContext()

    const handleClick = async() => {
        const response = await fetch('http://localhost:4000/api/workouts/' + workout._id , {
            method: 'DELETE'
        })
        const jsonForm = await response.json()

        if(response.ok)
        {
            dispatch({type : 'DELETE_WORKOUT', payload: jsonForm})
        }
    }

    return (
        <div className="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (kg) : </strong>{workout.load}</p>
            <p><strong>Reps : </strong>{workout.reps}</p>
            <p>{workout.createdAt}</p>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default WorkoutDetails;
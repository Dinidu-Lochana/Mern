import { useEffect, useState} from 'react';

import WorkoutDetails from '..//components/WorkoutDetails';
import WorkoutForm from '..//components/WorkoutForm';
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

const Home = () => {

    const {workouts , dispatch} = useWorkoutsContext()

    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts/')  //axios
            const jsonForm = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS' , payload: jsonForm })
            }
        }

        fetchWorkouts();
    }, [])

    return (
        <div className="home">
            <div className='workouts'>
                {workouts && workouts.map((workout)=>
                (
                    <WorkoutDetails key={workout._id} workout={workout}/>
                )
                )}
            </div>
            <WorkoutForm/>
        </div>
    )
}

export default Home;
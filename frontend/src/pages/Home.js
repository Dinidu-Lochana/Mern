import { useEffect, useState} from 'react';

import WorkoutDetails from '..//components/WorkoutDetails';

const Home = () => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('http://localhost:4000/api/workouts/')  //axios
            const jsonForm = await response.json()

            if(response.ok){
                setWorkouts(jsonForm)
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
        </div>
    )
}

export default Home;
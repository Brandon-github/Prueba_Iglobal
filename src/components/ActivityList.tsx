import { useEffect, useState } from "react"
import { Activity, ActivityType } from "../interfaces/Activity"
import activitiesData from '../data/data.json'
import ActivityCard from "./ActivityCard"
import { v4 as uuid } from 'uuid'

const ActivityList = ({type}: {type: ActivityType}) => {
  const [activities, setActivities] = useState<Activity[]>([])

  const colors = ["one", "two", "three", "four", "five", "size"]
  
  useEffect(() => {
    setActivities(activitiesData)
  }, [])

  return (
    <div className="w-full h-full grid grid-cols-3 gap-5 max-sm:grid-cols-1">
      {activities.map(({ title, timeframes }, index) => (
        <ActivityCard 
          title={title} 
          timeframes={timeframes} 
          type={type} 
          color={colors[index]} 
          icon={index}
          key={uuid()}
        />
      ))}
    </div>
  )
}

export default ActivityList
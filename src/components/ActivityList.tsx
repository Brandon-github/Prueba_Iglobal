import { useEffect, useState } from "react"
import { Activity, ActivityType } from "../interfaces/Activity"
import activitiesData from '../data/data.json'
import ActivityCard from "./ActivityCard"

const ActivityList = ({type}: {type: ActivityType}) => {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    setActivities(activitiesData)
  }, [])

  return (
    <div className="w-full h-full grid grid-cols-3 gap-5 max-sm:grid-cols-1">
      {activities.map(({ title, timeframes }) => (
        <ActivityCard title={title} timeframes={timeframes} type={type} />
      ))}
    </div>
  )
}

export default ActivityList
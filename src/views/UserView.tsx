import { useState } from "react"
import ActivityList from "../components/ActivityList"
import Container from "../layouts/Container"
import HeaderCard from "../layouts/HeaderCard"
import { ActivityType } from "../interfaces/Activity"
import { Link, useParams } from 'react-router-dom'

const UserView = () => {
  const [activityType, setActivityType] = useState<ActivityType>("daily")

  const { name, picture } = useParams()

  const changeActivityType = (type: ActivityType) => {
    setActivityType(type)
  }

  return (
    <Container>
      <main className="w-full min-h-screen flex justify-center items-center px-8 py-8 flex-col">
        <Link to='/' className="w-[900px] max-w-full h-12 bg-custom-secondary mb-5 rounded-lg flex justify-center items-center text-2xl text-custom-primary hover:bg-custom-secondary-active   transition-colors ease ease-in-out duration-200">Lista de usuarios</Link>

        <div className="w-[900px] max-w-full h-[400px] max-h-fit flex gap-5 max-sm:flex-col max-sm:h-fit max-sm:w-full">
          <div className="w-[270px] bg-custom-secondary h-full rounded-lg max-w-full max-sm:w-full">
            <HeaderCard name={name ?? ""} picture={picture + ".jpg" ?? ""} />
            <div className="flex flex-col w-full h-auto max-h-full px-5 py-1 [&>button]:py-2 [&>button]:transition-colors [&>button]:text-start duration-200 ease-out max-sm:flex-row max-sm:justify-around max-sm:py-3">
              <button
                className={`${activityType === "daily" ? "text-custom-primary" : "text-custom-secondary"} hover:text-custom-primary`}
                onClick={() => changeActivityType("daily")}
              >
                Daily
              </button>
              <button
                className={`${activityType === "weekly" ? "text-custom-primary" : "text-custom-secondary"} hover:text-custom-primary`}
                onClick={() => changeActivityType("weekly")}
              >
                Weekly
              </button>
              <button
                className={`${activityType === "monthly" ? "text-custom-primary" : "text-custom-secondary"} hover:text-custom-primary`}
                onClick={() => changeActivityType("monthly")}
              >
                Monthly
              </button>
            </div>
          </div>
          <ActivityList type={activityType} />
        </div>
      </main>
    </Container>
  )
}

export default UserView
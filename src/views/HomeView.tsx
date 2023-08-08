import { useState } from "react"
import ActivityList from "../components/ActivityList"
import Container from "../layouts/Container"
import HeaderCard from "../layouts/HeaderCard"
import { ActivityType } from "../interfaces/Activity"

const HomeView = () => {
  const [activityType, setactivityType] = useState<ActivityType>("daily")

  const changeActivityType = (type: ActivityType) => {
    setactivityType(type)
  }

  return (
    <Container>
      <main className="w-full min-h-screen flex justify-center items-center px-8 py-8">
        <div className="w-[900px] h-[400px] max-h-fit flex gap-5 max-sm:flex-col max-sm:h-fit max-sm:w-full">
          <div className="w-[270px] bg-[var(--bg-secondary)] h-full rounded-lg max-sm:w-full">
            <HeaderCard />
            <div className="flex flex-col w-full h-auto max-h-full px-5 py-1 [&>button]:py-2 [&>button]:transition-colors [&>button]:text-start duration-200 ease-out max-sm:flex-row max-sm:justify-around max-sm:py-3">
              <button 
                className={`${activityType === "daily" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"} hover:text-[var(--text-primary)]`} 
                onClick={() => changeActivityType("daily")}
              >
                Daily
              </button>
              <button 
                className={`${activityType === "weekly" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"} hover:text-[var(--text-primary)]`} 
                onClick={() => changeActivityType("weekly")}
              >
                Weekly
              </button>
              <button 
                className={`${activityType === "monthly" ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"} hover:text-[var(--text-primary)]`} 
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

export default HomeView
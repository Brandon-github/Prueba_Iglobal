import { Activity } from "../interfaces/Activity";
import { IconEllipsis, IconExercise, IconPlay, IconSelfCare, IconSocial, IconStudy, IconWork } from './icons/Icon'

const ActivityCard = ({ title, timeframes, type, color, icon }: Activity) => {


  const setIcon = (index: number) => {
    const style = "absolute -top-1 right-3 text-gray-600 opacity-[.15]"
    const icons = [
      <IconWork className={style} />,
      <IconPlay className={style} />,
      <IconStudy className={style} />,
      <IconExercise className={style} />,
      <IconSocial className={style} />,
      <IconSelfCare className={style} />
    ]

    return icons[index]
  } 

  return (
    <div className={`${color} relative overflow-hidden rounded-xl max-sm:h-[170px] group`}>
      {setIcon(icon ?? 0)}
      <div className="w-full h-3/4 bg-custom-secondary group-hover:bg-custom-secondary-active absolute bottom-0 rounded-lg p-5 transition-colors ease-out duration-150">
        <div className="flex justify-between items-center mb-4">
          <span className="text-custom-primary">{title}</span>
          <button className="w-fit h-fit">
            <IconEllipsis className="w-fit h-fit fill-custom-primary hover:fill-custom-primary transition ease-in-out duration-100" />
          </button>
        </div>
        <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-between">
          <span className="text-custom-primary text-4xl font-light">
            {timeframes[type ?? "daily"].current}hrs
          </span>
          <span className="text-custom-primary font-extralight text-md max-md:text-sm">
            Last week - {timeframes[type ?? "daily"].previous} hrs
          </span>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
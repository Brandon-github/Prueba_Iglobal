import { Activity } from "../interfaces/Activity";
import { IconEllipsis, IconWork } from './icons/Icon'

const ActivityCard = ({ title, timeframes, type }: Activity) => {
  return (
    <div className={`bg-[#ff8b64] relative overflow-hidden rounded-xl max-sm:h-[170px] group`}>
      <IconWork className="absolute -top-3 right-3" />
      <div className="w-full h-3/4 bg-[var(--bg-secondary)] group-hover:bg-[var(--bg-secondary-active)] absolute bottom-0 rounded-lg p-5 transition-colors ease-out duration-150">
        <div className="flex justify-between items-center mb-4">
          <span className="text-white">{title}</span>
          <button className="w-fit h-fit">
            <IconEllipsis className="w-fit h-fit fill-[var(--text-secondary)] hover:fill-[var(--text-primary)] transition ease-in-out duration-100" />
          </button>
        </div>
        <div className="flex flex-col max-sm:flex-row max-sm:items-center max-sm:justify-between">
          <span className="text-[var(--text-primary)] text-4xl font-light">
            {timeframes[type ?? "daily"].current}hrs
          </span>
          <span className="text-[var(--text-primary)] font-extralight">
            Last week - {timeframes[type ?? "daily"].previous} hrs
          </span>
        </div>
      </div>
    </div>
  )
}

export default ActivityCard
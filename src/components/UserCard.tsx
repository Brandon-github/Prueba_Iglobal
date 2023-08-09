import { Link } from "react-router-dom"

const UserCard = ({name, picture}: {name: {first: string, last: string}, picture: { large: string }}) => {
  return (
    <Link to={`/${name.first}-${name.last}/${picture.large.toString().split("/").pop()?.split('.')[0]}`} className="bg-custom-secondary hover:bg-custom-secondary-active flex justify-between items-center p-5 rounded-lg relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-2 before:bg-custom-terciary before:z-20 hover:before:bg-custom-secondary-active overflow-hidden transition-colors ease-out duration-150 sm:w-full">
      <img className="w-14 h-14 rounded-full" src={picture.large} alt="" />
      <span className="text-custom-primary">{name.first} {name.last}</span>
    </Link>
  )
}

export default UserCard
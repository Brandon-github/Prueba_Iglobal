
const HeaderCard = ({name, picture}: {name: string, picture: string}) => {
  return (
    <header className="w-full h-4/6 bg-custom-terciary rounded-xl flex flex-col justify-start p-5 max-sm:flex-row max-sm:gap-x-4 max-sm:h-fit max-sm:p-8">
      <img className="w-16 h-16 object-cover rounded-full border-solid border-2 border-custom-primary mb-5" src={`https://randomuser.me/api/portraits/women/${picture}`} alt="profile photo" />
      <div className="flex flex-col">
        <label className="text-custom-primary font-thin text-sm">Report for</label>
        <span className="text-custom-primary text-4xl font-extralight">
          {name.split("-")[0]} {name.split("-")[1]}
        </span>
      </div>
    </header>
  )
}

export default HeaderCard
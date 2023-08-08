
const HeaderCard = () => {
  return (
    <header className="w-full h-4/6 bg-[var(--bg-terciary)] rounded-xl flex flex-col justify-start p-5 max-sm:flex-row max-sm:gap-x-4 max-sm:h-fit max-sm:p-8">
      <img className="w-16 h-16 object-cover rounded-full border-solid border-2 border-[var(--text-primary)] mb-5" src="/image-jeremy.png" alt="profile photo" />
      <div className="flex flex-col">
        <label className="text-[var(--text-primary)] font-thin text-sm">Report for</label>
        <span className="text-[var(--text-primary)] text-4xl font-extralight">Jeremy Robson</span>
      </div>
    </header>
  )
}

export default HeaderCard
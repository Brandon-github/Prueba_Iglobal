
const Container = ({ children }: any) => {
  return (
    <div className="w-screen min-h-screen bg-[var(--bg-primary)]">
      { children }
    </div>
  )
}

export default Container
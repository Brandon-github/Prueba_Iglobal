
const Container = ({ children }: any) => {
  return (
    <div className="min-h-screen bg-custom-primary overflow-x-hidden">
      { children }
    </div>
  )
}

export default Container
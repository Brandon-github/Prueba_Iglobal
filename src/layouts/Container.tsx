import { ReactNode } from "react"

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-custom-primary overflow-x-hidden">
      { children }
    </div>
  )
}

export default Container
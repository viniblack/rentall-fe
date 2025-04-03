import { NavBar } from "@/components/features/navBar/navBar";
import { ReactNode } from "react";

interface CoreLayoutProps {
    children: ReactNode
  }
  
  const CoreLayout = async ({ children }: CoreLayoutProps) => {
    // const session = await getServerSession(authOptions)
  
    // if (!session) {
    //   redirect('/auth/login')
    // }
  
    return (
      <div className="hide-scrollbar h-screen overflow-y-auto">
        <NavBar />
        <main className="flex justify-center pt-24">{children}</main>
      </div>
    )
  }
  
  export default CoreLayout
  
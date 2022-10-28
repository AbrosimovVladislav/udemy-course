import {ReactNode} from "react";
import {Sidebar} from "./Sidebar/Sidebar";

interface LayoutProps {
  children: ReactNode
}

export const Layout = ({children}: LayoutProps): JSX.Element => {
  return (
      <>
        <Header/>
        <div>
          <Sidebar/>
          <div>
            {children}
          </div>
        </div>
        <Footer/>
      </>
  )
}

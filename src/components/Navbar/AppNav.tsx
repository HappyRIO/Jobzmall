import BottomNav from "./BottomNav"
import Navbar from "./Navbar"

const AppNav = () => {
    return(
        <>
            <div><Navbar/></div>
            <div className="fixed bottom-0 w-screen z-20 md:hidden "><BottomNav/></div>
        </>
    )
}

export default AppNav;
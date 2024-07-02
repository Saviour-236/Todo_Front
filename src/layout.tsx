import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Footer from "./components/footer"
function layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default layout
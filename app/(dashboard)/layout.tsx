import { Header } from "@/components/header"

type props = {
    children: React.ReactNode
}

const Dashboardlayout = ({children} : props) => {
    return (
        <>
        <main className=" ">
            <Header/>
            {children}
        </main>
        </>
        
    )
}

export default Dashboardlayout 
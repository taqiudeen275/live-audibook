import Sidebar from "@/app/dashboard/components/sidebar";
import NavBar from "@/app/dashboard/components/navBar";

export default function DashboardLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return(
        <div className="h-screen">
            <NavBar />
            <div className="flex sm:flex-row h-[100vh - 60px]">
            <Sidebar />
             <div className="sm:overflow-y-auto  p-10 w-full sm:h-[92vh]">
                 {children}
             </div>
            </div>
    </div>
    )
}
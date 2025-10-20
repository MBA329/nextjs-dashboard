import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices"
import {  fetchLatestInvoices} from "@/app/lib/data"
import {Suspense} from "react"
import {RevenueChartSkeleton} from "@/app/ui/skeletons";
import CardWrapper from "@/app/ui/dashboard/cards";

export default async function Page(){
    // const revenue = await fetchRevenue();
    const latestInvoices = await fetchLatestInvoices()
    return (
        <main>
            <h1 className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
                <Suspense fallback={'loading'}>
                    <CardWrapper/>
                </Suspense>
                Dashboard
            </h1>
            <div className={'grid gap-6 sm:grid-cols-2 lg:grid-cols-4'}>
            </div>
            <div className={'mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'}>
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                {/*<RevenueChart revenue={revenue}/>*/}
                <LatestInvoices latestInvoices={latestInvoices}/>
            </div>
        </main>
    )
}
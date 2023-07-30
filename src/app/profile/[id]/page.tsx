import { lazy, Suspense, FC } from "react"

import Loader from "@/components/server/Loader"
const Id = lazy(() => import("@/app/profile/[id]/Id"))

const Page: FC = ({ params }: any) => {
    const { id } = params

    return (
        <div>
            <Suspense
                fallback={
                    <div className="py-20">
                        <Loader />
                    </div>
                }
            >
                <Id id={id} />
            </Suspense>
        </div>
    )
}

export default Page

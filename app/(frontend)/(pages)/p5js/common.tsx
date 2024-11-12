'use client';

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function P5JSPageCommon ({ children, project_name }) {
    return (
        <div className="w-full min-h-[330px] mt-10 mb-16">
            <div className="container max-w-6xl mx-auto px-6">
            <Breadcrumb>
            <BreadcrumbList className="text-emerald-100/95">
                <BreadcrumbItem>
                <BreadcrumbLink className="text-emerald-100/95 hover:text-emerald-200/95" href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbLink className="text-emerald-100/95 hover:text-emerald-200/95" href="/p5js">P5JS samples</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                <BreadcrumbPage className="text-emerald-200/95">{project_name}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
            </Breadcrumb>
            <h1 className='text-4xl mt-5 lg:text-5xl'>P5JS: {project_name}</h1> 
            <div>
                {children}
            </div>
            </div>          
        </div>
    )
}
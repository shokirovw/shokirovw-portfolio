import { NextResponse } from 'next/server'
 
export function middleware(request) {
    const requestHeaders = new Headers(request.headers)

    requestHeaders.set('pagename', request.nextUrl.pathname)
    
    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    })

    return response;
}
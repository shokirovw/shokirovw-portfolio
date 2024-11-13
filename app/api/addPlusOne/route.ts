import { SanityBase } from "@/app/(frontend)/_lib/scripts/SanityHelper";
import { type NextRequest } from 'next/server'
import { sql } from '@vercel/postgres'
 
export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;

    if (searchParams.get('commit') == "vrai" || searchParams.get('commit') == "vraie") {
        const a = await sql`UPDATE likes SET like_count = like_count + 1 WHERE id = 1;`;

        if (a) {
            return Response.json({ success: true });
        } else {
            return Response.json({ success: false });
        }
    } else {
        return Response.json({ success: false });
    } 
}
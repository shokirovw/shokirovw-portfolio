import { SanityBase } from "@/app/(frontend)/_lib/scripts/SanityHelper";
import { type NextRequest } from 'next/server'
 
export async function GET(request: NextRequest) {
    const documentId = 'ba60ff98-e0d0-4657-9533-a25a3cd3ec18';

    const searchParams = request.nextUrl.searchParams;

    if (searchParams.get('commit') == "vrai" || searchParams.get('commit') == "vraie") {
        await SanityBase.client.patch(documentId).inc({ likeCount: 1 }).commit();

        return Response.json({ success: true });
    } else {
        return Response.json({ success: false });
    }
}
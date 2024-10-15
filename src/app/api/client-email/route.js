import { addDoc, doc } from "firebase/firestore";
import { newsLetterCollection,checkClientEmail } from "@/app/__db/firebase-config";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log('showing body', body);
        if (body.email === undefined) {
            return Response.json({error:'There is no valid email'}, {status:500});
        }
        if(await checkClientEmail(body.email) == true){
            return Response.json({message:'You are already subscribed with us.'}, {status:201})
        }
        await addDoc(newsLetterCollection, {
            clientEmail:body.email,
        });
        
        return Response.json({message:'Thanks! You are now subscribed to our newsletter'}, {status:201})
    } catch (e) {
        console.log(e);
        return Response.json({error: 'Failed! Please try again.'});
    }
}
import { addDoc, doc } from "firebase/firestore";
import { message_collection } from "@/app/__db/firebase-config";

export function GET() {
    return Response.json({message:'hellow world'});
}

// export async function POST(req) {
//     const body = await req.json();
//     console.log(body);
//     return Response.json({message:'hello world'})
// }

export async function POST(req) {
    try {
        const body = await req.json();
        const keys = ['interest', 'business_name', 'name', 'email', 'phone', 'message_text'];
        
        for (let i=0; i<keys.length; i++) {
            if(body[keys[i]] == undefined) {
                return Response.json({error:'please fill up all the field and information'}, {
                    status:'404'
                });
            }
        }
      
        await addDoc(message_collection, {
            interest:body.interest,
            business_name:body.business_name,
            name:body.name,
            email:body.email,
            phone:body.phone,
            message_text:body.message_text,
        });
        return Response.json({message:'Succesfully send your message. We will reach to you soon.'}, {status:200})
    } catch(e) {   
        console.log(e.message);
        return Response.json({error:e.message});
    }
}
import { Resend } from 'resend';
// import * as Mailchipp from '@mailchimp/mailchimp_transactional'
import EmailTemplate from '@/app/component/emailTemplate';


const resend = new Resend(process.env.resend_api_key);

export function GET() {
    return Response.json({message:'api route is working'});
}

export async function POST(req) {
    try {
        const body = await req.json();
        if(body.email === undefined) {
            throw new Error('There is no valid email');
        }
        
        const {data,error} = await resend.emails.send({
            from: 'info@jem-digital.com',
            to : [body.email],
            subject: 'the most wanted business guide from jem digital',
            react: EmailTemplate({clientName:'Sir/Madam',pdfLink:'jem-digital.com'})
        });
        if (error) {
            console.log(error);
            throw new Error(error?.message || ' there is something wrong');
        }
        return Response.json({message:'Successfully send your message.'}, {status:201});
    } catch (e) {
        return Response.json({error:e.message});
    }
}

// export async function POST(req) {
//     try {
//         const body = await req.json();
//         if(body.email == undefined) {
//             throw new Error('there is valid email address');
//         }
//         const message = {
//             from_email:'info@jem-digital.com',
//             subject:'your favourite business guide from jem digital',
//             text:'Checking if it is working',
//             to: [
//                 {
//                     email:'info@jem-digital.com',
//                     type:'to'
//                 }
//             ]
//         }
//         const response = await mailchimp.messages.send({
//             message
//         });
//         console.log(response);
//         if (response.status === 'rejected') {
//             return Response.json({message:'Can not send email'}, {status:'400'})
//         }
//         return Response.json({message:'email has been sent'});
//     } catch (e) {
//         return Response.json({error:e.message});
//     }
// }
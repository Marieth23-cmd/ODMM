import { NextResponse } from "next/server";
import { Resend } from "resend";


const resend=new Resend(process.env.RESEND_API_KEY);

export async function POST(request:Request){
    try{
        const body= await request.json()
        const {company, name , email,message}=body
    
            if(!name || !email || !message){
                return NextResponse.json(
                    {error:"Campos Obrigatórios em falta"}, 
                    {status:400}
                )
            } 
              await resend.emails.send({
                            from:"onboarding@resend.dev",
                            to:process.env.CONTACT_EMAIL!,
                             subject: "Novo contacto pelo site",
                        html: `
                            <h3>Novo Contacto</h3>
                            <p><strong>Empresa:</strong>${company}</p>
                            <p><strong>Nome:</strong>${name}</p>
                            <p><strong>Email:</strong>${email}</p>
                            <p><strong>Mensagem:</strong>${message}</p>
                            `
    })
    return NextResponse.json({sucess:true})

    }catch(error){
        console.log("Erro ao avaliar contacto", error)
        return NextResponse.json({
            error:"erro interno ao enviar mensagem"
        }, 
        {status:500})


    }

 
}
import { NextResponse } from "next/server";
import { Resend } from "resend";




export async function POST(request:Request){
    const resend=new Resend(process.env.RESEND_API_KEY);
    try{


            console.log("RESEND_API_KEY existe?", !!process.env.RESEND_API_KEY);
    console.log("CONTACT_EMAIL existe?", !!process.env.CONTACT_EMAIL);

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "RESEND_API_KEY não configurada" },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      return NextResponse.json(
        { error: "CONTACT_EMAIL não configurado" },
        { status: 500 }
      );
    }

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

    }catch(error:any){

        console.error("========== ERRO CAPTURADO ==========");
    console.error("Tipo do erro:", error.constructor.name);
    console.error("Mensagem:", error.message);
    console.error("Status Code:", error.statusCode);
    console.error("Error completo:", error);
        console.log("Erro ao avaliar contacto", error)
        return NextResponse.json({
            error:"erro interno ao enviar mensagem"}, 
        {status:500})


    }

 
}
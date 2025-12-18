import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  console.log("=== DEBUG PRODUÇÃO ===");
  console.log("RESEND_API_KEY existe?", !!process.env.RESEND_API_KEY);
  console.log("CONTACT_EMAIL existe?", !!process.env.CONTACT_EMAIL);
  
  
  const apiKey = "re_8mSPY5bk_DtywnBsMgXfiYfXvFKTt6a47";
  const contactEmail = "mariethpascoal7@gmail.com"
  if (!apiKey) {
    console.error("RESEND_API_KEY está undefined/null/empty");
    return NextResponse.json(
      { error: "Configuração do servidor incorreta - API Key missing" },
      { status: 500 }
    );
  }

  if (!contactEmail) {
    console.error("CONTACT_EMAIL está undefined/null/empty");
    return NextResponse.json(
      { error: "Configuração do servidor incorreta - Email missing" },
      { status: 500 }
    );
  }

  try {
    console.log("Instanciando Resend com key:", apiKey.substring(0, 8) + "...");
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { company, name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    console.log("Enviando email para:", contactEmail);
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: contactEmail,
      subject: "Novo contacto pelo site",
      html: `
        <h3>Novo Contacto</h3>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    });

    console.log("Email enviado com sucesso:", result);
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("=== ERRO COMPLETO ===");
    console.error("Message:", error.message);
    console.error("Name:", error.name);
    console.error("Stack:", error.stack);
    
    return NextResponse.json(
      { error: "Erro ao enviar mensagem", details: error.message },
      { status: 500 }
    );
  }
}
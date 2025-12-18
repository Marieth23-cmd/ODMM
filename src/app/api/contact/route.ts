import { NextResponse } from "next/server";
import { Resend } from "resend";

// ❌ REMOVA esta linha (causa o erro no build)
// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  // ✅ ADICIONE aqui (executa apenas no runtime)
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { company, name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Campos Obrigatórios em falta" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL!,
      subject: "Novo contacto pelo site",
      html: `
        <h3>Novo Contacto</h3>
        <p><strong>Empresa:</strong> ${company || 'Não informado'}</p>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.log("Erro ao enviar contacto:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar mensagem" },
      { status: 500 }
    );
  }
}
import nodemailer from 'nodemailer';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default async function handler(
    req: { method: string; body: ContactForm }, 
    res: {
      status: (statusCode: number) => { json: (data: any) => void; end: () => void }; 
      end: () => void;
    }
  ) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail', 
      auth: {
        user: process.env.MEU_EMAIL, 
        pass: process.env.SENHA, 
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: process.env.MEU_EMAIL,
        subject: `Nova mensagem de contato de ${name}`,
        html: `
          <p>Você recebeu uma nova mensagem de contato:</p>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensagem:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      res.status(500).json({ error: 'Erro ao enviar email' });
    }
  } else {
    res.status(405).end(); 
  }
}
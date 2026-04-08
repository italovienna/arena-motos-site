import { NextResponse } from 'next/server';

// Temporary In-Memory Database (MVP)
// Note: In serverless (Vercel), this array will reset when the lambda reboots.
let appointments = [];

export async function GET() {
  return NextResponse.json({ appointments }, { status: 200 });
}

export async function POST(request) {
  try {
    const data = await request.json();
    
    const newAppointment = {
      id: Date.now().toString(),
      ...data,
      createdAt: new Date().toISOString()
    };
    
    appointments.push(newAppointment);
    
    return NextResponse.json({ message: 'Agendamento salvo com sucesso', appointment: newAppointment }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar o agendamento' }, { status: 500 });
  }
}

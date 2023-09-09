import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function GET() {
  const supabaseClient = createClient(supabaseUrl, supabasePublicKey);

  const { data, error } = await supabaseClient.from('products').select('*');

  if (error) {
    console.log(error);
    return error;
  }

  return NextResponse.json(data);
}

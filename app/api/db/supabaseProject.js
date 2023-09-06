import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabasePublicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabaseProject = async (slug) => {
  const supabaseClient = createClient(supabaseUrl, supabasePublicKey);

  const { data, error } = await supabaseClient
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .limit(1)
    .single();

  if (error) {
    console.log(error);
    return error;
  }

  console.log(data);
  return data;
};

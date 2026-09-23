const SUPABASE_URL = "https://kvmmbgtbohzlyicotxjx.supabase.co";

const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_4tMC8eQaRGffTWIkd0BAcA_73NhF5oS";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true
    }
  }
);

window.supabaseClient = supabaseClient;

console.log("Supabase connected successfully");
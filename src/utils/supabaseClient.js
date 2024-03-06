import { createClient } from "@supabase/supabase-js";

const supabaseURL = import.meta.env.VITE_SUPABASE_URL;
const apiKey = import.meta.env.VITE_ANON_API_KEY;

const supabase = createClient(supabaseURL, apiKey);

export default supabase;

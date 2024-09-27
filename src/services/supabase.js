import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zbizbsbipyoswdtpeayq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiaXpic2JpcHlvc3dkdHBlYXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA3MjEwNjAsImV4cCI6MjAzNjI5NzA2MH0.qfQlGW6Zsjw92ZJo1a_MLDSjWSJex4D3K0hfwcwZTXc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

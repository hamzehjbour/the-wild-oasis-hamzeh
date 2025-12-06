import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://retxspymynrpmwmtvqdx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJldHhzcHlteW5ycG13bXR2cWR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMjk5NTQsImV4cCI6MjA4MDYwNTk1NH0.8mgZnd8vH7zIJk0eQ1MUiACKCXi2XoIxrmAdp75AvvY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

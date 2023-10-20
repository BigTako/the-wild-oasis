import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://trltkhxxpxbpjcbywizc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRybHRraHh4cHhicGpjYnl3aXpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY5Mzk2MzcsImV4cCI6MjAxMjUxNTYzN30.t23-Yd6X1QNLn8VcvovUDqvZRMMLKu3EOLRHld8FD-c";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

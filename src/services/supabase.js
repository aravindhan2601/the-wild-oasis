import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nmyzivikgnmnnbopmjsy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5teXppdmlrZ25tbm5ib3BtanN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI4OTkxMTIsImV4cCI6MjA0ODQ3NTExMn0.QOYd0f5bwmppEM0bQBygwaqdLxpIVUU22OPjwbjfmK8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

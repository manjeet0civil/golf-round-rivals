// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://tkjdobervpjdvxdukmqv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRramRvYmVydnBqZHZ4ZHVrbXF2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0MTU3ODQsImV4cCI6MjA2NTk5MTc4NH0.a_NkkwEksljZGpCu1zqnPZ9uubyMOAAMOcctA3tjdR0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
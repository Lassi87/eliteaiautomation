import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Types for our database tables
export interface ContactSubmission {
  id: string
  name: string
  email: string
  selected_service: string
  problem: string
  additional_info: string
  created_at: string
  updated_at: string
}
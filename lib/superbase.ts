import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://dmldyzicmbritjmbagkg.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtbGR5emljbWJyaXRqbWJhZ2tnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA4MjkwOTgsImV4cCI6MjAyNjQwNTA5OH0.8AfVEIJF-vD6arkTCdnUXrE2FnkMtK_7y1ARSoUG3RA';


export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})
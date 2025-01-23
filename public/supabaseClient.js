import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://guoohmoyfxdgvjvhgsur.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1b29obW95ZnhkZ3Zqdmhnc3VyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc1OTAxMTYsImV4cCI6MjA1MzE2NjExNn0.tQAh1gg_zfNh5Q4ZuwBfsSTrfKsPQ--5QWqCchy6CFY'

const supabase = createClient(supabaseUrl, supabaseKey)
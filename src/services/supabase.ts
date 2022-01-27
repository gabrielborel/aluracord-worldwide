import { createClient } from '@supabase/supabase-js'

const SUPABASE_ANON_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzI4NDE1NywiZXhwIjoxOTU4ODYwMTU3fQ.TR83HS2ennQpQaFq3tCvT74d2Y1xCTOG7xlVMPzuCDQ'
const SUPABASE_URL = 'https://tgbybsplxbufnjosqukk.supabase.co'
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabaseClient

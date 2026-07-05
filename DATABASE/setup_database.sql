-- VexaNode Database Setup Script
-- Run this in the Supabase SQL Editor

-- ############################################################
-- PART 1: NEXTAUTH TABLES (In Public Schema)
-- ############################################################

CREATE TABLE IF NOT EXISTS public.users (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  name text,
  email text,
  "emailVerified" timestamp with time zone,
  image text,
  password text, -- Added for Credentials hashing
  CONSTRAINT users_pkey PRIMARY KEY (id),
  CONSTRAINT users_email_key UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS public.accounts (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  type text NOT NULL,
  provider text NOT NULL,
  "providerAccountId" text NOT NULL,
  refresh_token text,
  access_token text,
  expires_at bigint,
  token_type text,
  scope text,
  id_token text,
  session_state text,
  "userId" uuid NOT NULL,
  CONSTRAINT accounts_pkey PRIMARY KEY (id),
  CONSTRAINT accounts_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.sessions (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  expires timestamp with time zone NOT NULL,
  "sessionToken" text NOT NULL,
  "userId" uuid NOT NULL,
  CONSTRAINT sessions_pkey PRIMARY KEY (id),
  CONSTRAINT sessions_session_token_key UNIQUE ("sessionToken"),
  CONSTRAINT sessions_user_id_fkey FOREIGN KEY ("userId") REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.verification_tokens (
  identifier text NOT NULL,
  token text NOT NULL,
  expires timestamp with time zone NOT NULL,
  CONSTRAINT verification_tokens_pkey PRIMARY KEY (identifier, token)
);

-- ############################################################
-- PART 2: VEXANODE APP TABLES
-- ############################################################

CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid NOT NULL,
  name text,
  email text,
  status text DEFAULT 'Active',
  is_admin boolean DEFAULT false,
  joined_at timestamp with time zone DEFAULT now(),
  CONSTRAINT profiles_pkey PRIMARY KEY (id),
  CONSTRAINT profiles_id_fkey FOREIGN KEY (id) REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.orders (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  user_name text,
  plan_name text,
  amount text,
  status text DEFAULT 'Pending',
  proof_url text,
  expiry_date timestamp with time zone,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT orders_pkey PRIMARY KEY (id),
  CONSTRAINT orders_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.tickets (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  subject text,
  message text,
  status text DEFAULT 'Open',
  priority text DEFAULT 'Normal',
  type text DEFAULT 'Support',
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT tickets_pkey PRIMARY KEY (id),
  CONSTRAINT tickets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS public.ticket_replies (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  ticket_id uuid NOT NULL,
  user_id uuid NOT NULL,
  message text NOT NULL,
  is_admin boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT now(),
  CONSTRAINT ticket_replies_pkey PRIMARY KEY (id),
  CONSTRAINT ticket_replies_ticket_id_fkey FOREIGN KEY (ticket_id) REFERENCES public.tickets(id) ON DELETE CASCADE,
  CONSTRAINT ticket_replies_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE
);

-- ############################################################
-- PART 3: AUTOMATION TRIGGERS
-- ############################################################

-- Create a profile automatically when a user logs in for the first time
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, name, email)
  VALUES (new.id, new.name, new.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON public.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON public.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ############################################################
-- PART 4: SYSTEM SETTINGS
-- ############################################################

CREATE TABLE IF NOT EXISTS public.settings (
  key text NOT NULL PRIMARY KEY,
  value jsonb NOT NULL,
  updated_at timestamp with time zone DEFAULT now()
);

-- ############################################################
-- PART 5: HELPER TEMPLATES (Optional Utility Queries)
-- ############################################################

-- To promote a user profile to administrator, run:
-- UPDATE public.profiles SET is_admin = true WHERE email = 'admin@example.com';



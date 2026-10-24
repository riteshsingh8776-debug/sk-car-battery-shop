/*
# Create inquiries table for Sk Car Battery Shop contact forms

1. New Tables
- `inquiries`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the inquirer
  - `phone` (text, not null) — mobile number
  - `city` (text, nullable) — city (used by the detailed form)
  - `service` (text, nullable) — requested service (used by the detailed form)
  - `source` (text, not null default 'query') — which form: 'query' (quick) or 'message' (detailed)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `inquiries`.
- Grant INSERT to `anon` + `authenticated` so public visitors can submit the contact forms without signing in.
- Allow anon + authenticated INSERT because inquiries are intentionally public submissions (no sign-in screen on this site).
- No SELECT/UPDATE/DELETE grants for anon — only the shop owner (via service role / dashboard) should read or manage submissions.
*/

CREATE TABLE IF NOT EXISTS inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  city text,
  service text,
  source text NOT NULL DEFAULT 'query',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON inquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_inquiries" ON inquiries;
CREATE POLICY "anon_insert_inquiries"
ON inquiries FOR INSERT
TO anon, authenticated
WITH CHECK (true);

# Skill: database-schema

Supabase PostgreSQL — types, foreign keys, RLS, indexes.

## Standard Table Template
```sql
create table [table_name] (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-update updated_at
create trigger set_updated_at
  before update on [table_name]
  for each row execute procedure moddatetime(updated_at);
```

## RLS (Row Level Security) — Always Enable
```sql
alter table [table_name] enable row level security;

-- User can only see their own rows
create policy "own rows only" on [table_name]
  for all using (auth.uid() = user_id);

-- Public read (for leaderboards, public profiles)
create policy "public read" on [table_name]
  for select using (true);

-- Authenticated insert only
create policy "auth insert" on [table_name]
  for insert with check (auth.uid() = user_id);
```

## Common Patterns

### Credits/Usage
```sql
create table user_credits (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade unique,
  credits int not null default 0,
  plan text not null default 'free', -- 'free' | 'starter' | 'pro'
  updated_at timestamptz default now()
);
```

### AI Generations Log
```sql
create table generations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  prompt text,
  result text,
  model text,
  tokens_used int,
  created_at timestamptz default now()
);
create index on generations(user_id, created_at desc);
```

### Anonymous Messages (Whispr-style)
```sql
create table messages (
  id uuid primary key default gen_random_uuid(),
  recipient_id uuid references users(id) on delete cascade,
  content text not null check (length(content) between 1 and 500),
  mood text check (mood in ('neutral','love','fire','think')),
  is_read boolean default false,
  created_at timestamptz default now()
);
create index on messages(recipient_id, created_at desc);
```

## Mike's Supabase Projects
- Whispr: `ynrnnmwrjcbnibankseq.supabase.co`
- Spawn AI: `okedzhrtnrofefliwzbq.supabase.co`

## Rules
- Always UUID, never serial int (safer for public APIs)
- Always RLS enabled — even if policy is `using (true)` for public
- Index on (user_id, created_at desc) for all user-scoped tables
- Soft delete preferred: `deleted_at timestamptz` instead of hard delete

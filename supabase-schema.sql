-- ARIZONA INTERIOR EXTERIOR - STARTER DATABASE
-- Run this whole file in Supabase: SQL Editor -> New query -> Run

create extension if not exists "pgcrypto";

create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  slug text not null unique,
  created_at timestamptz default now()
);

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category_id uuid references public.categories(id) on delete set null,
  price numeric(12,2),
  size text,
  material text,
  description text,
  colors jsonb default '[]'::jsonb,
  image_url text,
  transparent_image_url text,
  featured boolean default false,
  created_at timestamptz default now()
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  project_type text not null,
  description text,
  before_image_url text,
  after_image_url text,
  image_url text,
  created_at timestamptz default now()
);

create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text,
  email text,
  message text,
  status text default 'new',
  created_at timestamptz default now()
);

create table if not exists public.room_designs (
  id uuid primary key default gen_random_uuid(),
  customer_name text,
  customer_email text,
  room_image_url text,
  design_data jsonb default '{}'::jsonb,
  created_at timestamptz default now()
);

-- Enable Row Level Security
alter table public.categories enable row level security;
alter table public.products enable row level security;
alter table public.projects enable row level security;
alter table public.enquiries enable row level security;
alter table public.room_designs enable row level security;

-- Public read access for catalogue/project content
create policy "Public can read categories"
on public.categories for select using (true);

create policy "Public can read products"
on public.products for select using (true);

create policy "Public can read projects"
on public.projects for select using (true);

-- Public users can submit enquiries and room designs
create policy "Public can submit enquiries"
on public.enquiries for insert with check (true);

create policy "Public can save room designs"
on public.room_designs for insert with check (true);

-- STORAGE
insert into storage.buckets (id, name, public)
values ('product-images', 'product-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('project-images', 'project-images', true)
on conflict (id) do nothing;

insert into storage.buckets (id, name, public)
values ('room-uploads', 'room-uploads', false)
on conflict (id) do nothing;

-- IMPORTANT:
-- Admin login + admin-only write policies should be added after the admin user is created.

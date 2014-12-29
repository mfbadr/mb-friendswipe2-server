create table swipes(
  id serial primary key,
  sender bigint not null references users(id),
  target bigint not null references users(id),
  time timestamp not null default now(),
  liked boolean not null default false
);

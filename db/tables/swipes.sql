create table swipes(
  sender bigint not null references users(id),
  target bigint not null references users(id),
  primary key(sender, target),
  time timestamp not null default now(),
  liked boolean not null default false
);

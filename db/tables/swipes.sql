create table swipes(
  sender bigint not null references users(id),
  target bigint not null references users(id),
  liked boolean not null default false
);

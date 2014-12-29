insert into users (name, id) values ('alice', 1);
insert into users (name, id) values ('bob', 2);
insert into users (name, id) values ('charlie', 3);
insert into users (name, id) values ('dave', 4);

insert into swipes (sender, target, liked) values (1, 2, true);
insert into swipes (sender, target, liked) values (2, 1, true);
insert into swipes (sender, target, liked) values (3, 4, true);
insert into swipes (sender, target, liked) values (1, 4, false);
insert into swipes (sender, target, liked) values (4, 1, true);

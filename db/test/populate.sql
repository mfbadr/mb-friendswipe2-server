insert into users (name, id) values ('alice', 1);
insert into users (name, id) values ('bob', 2);
insert into users (name, id) values ('charlie', 3);
insert into users (name, id) values ('dave', 4);
insert into users (name, id) values ('Andrew Badr', 10104524481185250);
insert into users (name, id) values ('Mikey Badr', 10202986342728795);
insert into users (name, id) values ('Zoe Ames', 10100130771764190);
insert into users (name, id) values ('Adam Barnhard', 10102524401975169);
insert into users (name, id) values ('Sarah Pearson', 10152711310407562);

insert into swipes (sender, target, liked) values (1, 2, true);
insert into swipes (sender, target, liked) values (2, 1, true);
insert into swipes (sender, target, liked) values (3, 4, true);
insert into swipes (sender, target, liked) values (1, 4, false);
insert into swipes (sender, target, liked) values (4, 1, true);


--mikey's likes on everyone 
insert into swipes (sender, target, liked) values (10202986342728795, 10104524481185250, true);
insert into swipes (sender, target, liked) values (10202986342728795, 10100130771764190, true);
insert into swipes (sender, target, liked) values (10202986342728795, 10102524401975169, true);
insert into swipes (sender, target, liked) values (10202986342728795, 10152711310407562, true);

-- everyones likes on mikey
insert into swipes (sender, target, liked) values (10104524481185250, 10202986342728795, true);
insert into swipes (sender, target, liked) values (10100130771764190, 10202986342728795, true);
insert into swipes (sender, target, liked) values (10102524401975169, 10202986342728795, true);
insert into swipes (sender, target, liked) values (10152711310407562, 10202986342728795, true);

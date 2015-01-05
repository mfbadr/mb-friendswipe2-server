create or replace function user_likes_sent (uid integer)
returns table (sender bigint, name varchar, time timestamp, liked boolean) AS $$
declare
begin

  return query
    select sender, time, liked, u.name 
    from swipes s
    inner join users u on u.id = s.target
    where s.sender = uid and s.liked = true
    order by time desc
    ;

end;
$$ language plpgsql;

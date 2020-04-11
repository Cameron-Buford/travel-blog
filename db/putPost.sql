update posts 
set (title, location, content, image) = ($2, $3, $4, $5)
where post_id = $1;

select * from posts;
use shopping;

insert into user(account, password, username, email, created, updated) values
('user1', '1234', 'username 1', 'user1@dgsw.hs.kr', now(), now()),
('user2', '1234', 'username 2', 'user2@dgsw.hs.kr', now(), now()),
('user3', '1234', 'username 3', 'user3@dgsw.hs.kr', now(), now()),
('user4', '1234', 'username 4', 'user4@dgsw.hs.kr', now(), now()),
('user5', '1234', 'username 5', 'user5@dgsw.hs.kr', now(), now());

select * from user;
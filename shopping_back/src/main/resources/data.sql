use shopping;

insert into user(account, password, username, email, created, updated) values
('user1', '1234', 'username 1', 'user1@dgsw.hs.kr', now(), now()),
('user2', '1234', 'username 2', 'user2@dgsw.hs.kr', now(), now()),
('user3', '1234', 'username 3', 'user3@dgsw.hs.kr', now(), now()),
('user4', '1234', 'username 4', 'user4@dgsw.hs.kr', now(), now()),
('user5', '1234', 'username 5', 'user5@dgsw.hs.kr', now(), now());

select * from user;

delete  from product where image like 'image4.jpg';

insert into product(image, name, content, cost, type) values('image7.jpg', '긴 치마', '상당히 길어요', 35000, 3);




ALTER DATABASE shopping DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
ALTER table product DEFAULT CHARACTER SET utf8;
alter table basket modify column accountId varchar(20) character set utf8;
alter table product modify column image varchar(50) character set utf8;
alter table product modify column content varchar(100) character set utf8;
CREATE TABLE visitor(
    id int NOT NULL AUTO_INCREMENT primary key,
    name VARCHAR(10) NOT NULL,
    comment mediumtext
);

--사용자 생성
create user 'user'@'%' identified by '1234';
--사용자 권한(모든 db에 접근 가능)
grant all privileges on *.* to 'user'@'%' with grant option;
-- 현재 사용중인 mysql캐쉬를 지우고 설정 적용
flush privileges;

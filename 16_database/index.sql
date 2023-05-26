CREATE TABLE user(
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') default '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
)
INSERT INTO user (id, pw, name, gender, birthday, age) VALUES
('hong1234', '3asdfas', '홍길동', 'M', '1990-01-31', 33),
('sung', '1234', '성춘향', 'F', '1992-02-31', 33),
('power70', '3asdfas', '변사또', 'M', '1990-01-31', 33),
('hanjo', 'dfdf', '수지', 'M', '1990-01-31', 33),
('widow', 'rere', '백현', 'M', '1990-01-31', 33),
('coffee', 'wewe', '이준기', 'M', '1990-01-31', 33),
('mouse', 'qwqw', '이민호', 'M', '1990-01-31', 33);

--1번
SELECT * FROM kdt7.user order by birthday asc;

--2번
SELECT * 
FROM kdt7.user 
where gender = "M" 
order by name asc;

--3번
select *
from kdt7.user
where birthday between '1990-01-31' and '1990-12-31';

--4번
select *
from kdt7.user
where birthday like '%06%'
order by birthday asc;

--5번
select *
from kdt7.user
where gender="M" and birthday between '1970-01-01' and '1970-12-31'

-- 6번
select *
from kdt7.user
order by age desc LIMIT 3;
-- 7번
select *
from kdt7.user
where age>25 && age <=50;

create table customer(
 id varchar(10) not null primary key,
 name varchar(10) not null, 
 birthday date not null
 );
 
 insert into customer(id, name, birthday) values
 ('aaa', '김이현', '1990-03-17'),
 ('bbb', '최지율', '1992-11-01'),
 ('ccc', '이혜진', '1993-05-31');

 create table order_list(
    id int auto_increment not null primary key,
    customer_id varchar(10) not null,
    product_name varchar(20) not null,
    quantity int,
    foreign key(customer_id) references customer(id) on update cascade on delete cascade
 );

insert into order_list(customer_id, product_name, quantity) values
('aaa', '맥북m1', 1),
('bbb', '빅파이', 30),
('ccc', '키보드', 3),
('ddd', '초코파이', 5),
('ccc', '텀블러', 1);

select * from customer;
select * from order_list;

--inner join
select a.name, b.quantity from customer as a inner join order_list as b on a.id = b.customer_id;

create table new_customer(
    id varchar(10) not nul priary key,
    name varchar(10) not null,
    birthday varchar(6) not null,
    phone varchar(20) not null,
    constraint new_customer_id primary key(id)
);

create table new_product (
   id int not null auto_increment primary key,
   product_name varchar(10) not null,
   origin varchar(10) not null,
   price int not null
);

create table new_order (
    order varchar(10) not null primary key,
    new_customer_id varchar(10) not null,
    new_product_id int not null,
    quantity int not null, 
    foreign key(new_customer_id) references new_customer(id) on update cascade on delete cascade,
    foreign key(new_product_id) references new_product(id) on update cascade on delete cascade
);

insert into new_customer(id, name, birthday, phone) values
('hello', '김지수', '910101', '010-9184-3919'),
('world', '박세진', '920202', '010-2830-3919'),
('banana', '이민지', '930303', '010-1234-3919'),
('apple', '정민혁', '940404', '010-2344-3919'),
('kiwi', '박세진', '950505', '010-4355-3919');

insert into new_product(product_name, origin, price) values
('무선마우스', '삼성', 20000),
('무선마우스', 'lg', 60000),
('긴팔티셔츠', 'lg', 40000),
('키보드', '삼성', 50000),
('헤드폰', '소니', 30000),
('마우스', '로제텍', 40000);

insert into new_order(order, new_customer_id, new_product_id, quantity) values
('m101312', 'hello', 1, 2),
('k233332', 'banana', 4, 1),
('t220085', 'world', 3, 3),
('h111107', 'hello', 5, 1),
('m101312', 'kiwi', 6, 1);

select * from new_customer as a inner join new_order as b
on a.id = b.new_customer_id

select sum(c.price * b.quantity) as total from new_customer as a
inner join new_order as b on a.id=b.new_customer_id,
inner join new_product as c
on b.new_product_id=c.id
where a.name='박세진' and c.product_name='긴팔티셔츠';

CREATE TABLE customer(
    customer_id VARCHAR2(20) NOT NULL,
    customer_name VARCHAR2(10) NOT NULL,
    age NUMBER,
    grade VARCHAR2(10) NOT NULL,
    job_title VARCHAR2(20),
    saved_money NUMBER DEFAULT 0,
    PRIMARY KEY (customer_id)
)

CREATE TABLE product(
    product_no VARCHAR2(5) NOT NULL,
    product_name VARCHAR2(20),
    stock NUMBER,
    unit_price NUMBER,
    manufacturer VARCHAR2(20),
    PRIMARY KEY (product_no),
    CHECK (stock >= AND stock <=10000)
);

CREATE TABLE porder(
    order_no VARCHAR2(5) NOT NULL,
    customer_id VARCHAR2(20),
    product_no VARCHAR2(5),
    quantity NUMBER,
    destination VARCHAR2(30),
    order_date DATE,
    PRIMARY KEY (order_no),
    FOREIGN KEY (customer_id) REFERENCES customer (customer_id),
    FOREIGN KEY (product_no) REFERENCES product(product_no)
);

CREATE TABLE shipping_company(
    company_no VARCHAR2(5) NOT NULL,
    company_name VARCHAR2(20),
    address VARCHAR2(100),
    telephone VARCHAR2(20),
    PRIMARY KEY (company_no)
);
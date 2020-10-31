create database customerlist;

use customerlist;

create table customer(
	id int not null auto_increment primary key,
	name varchar(50) not null,
	address varchar(100) not null,
	phone varchar(15) not null
);
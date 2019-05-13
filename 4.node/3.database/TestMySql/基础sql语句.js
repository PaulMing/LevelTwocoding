// show databases;
// use 库名;
// create database xxx;//创建
// drop database xxx;//删除

// show tables;
// create table xxx;// 创建表
// delete table xxx;//删除表
// desc 表名;//展示表的所有字段
// show create table xx;


// 增加数据
insert into student (`stu-num`, `name`,`age`,`class`) values (1,'小红',18,1);
// 更改数据
update student set age = 23,class=3 where name='小红';

// 查询数据 -> 应用场景很广泛：根据浏览量、点赞数、留言数等进行筛选
select * from student;
select * from student where age = 19;
select name from student where age = 19;
select name from student where age = 19 and class = 2;
select name from student where age = 19 or class = 2;
// 查询总人数
select count(1) from student;
select count(1) from student where age = 19;
// 求和
select sum(age) from student;
// 求平均年龄
select sum(age)/count(1) from student;
select avg(age) from student;
// 分组 ->group by xxx，xx字段可以放到select xx from student group by class;其它字段不行 ->主要放置函数
select count(1) from student group by class;
select class, count(1), avg(age) from student group by class;
// 分页 -> 限制个数
select * from student limit 2;
// 可写两个数，首个表示偏移量，第二个表示每页个数 ->最终展示第三个、第四个
select * from student limit 2 ,2;
select * from student limit 3 ,2;
// 正序
select * from student order by id;
// 倒序 -> desc:降序
select * from student order by id desc;
select * from student order by id desc limit 3,2;

// as字段表示“取别名”,数据库按照“别名”形式展示,方便阅读 ->常用于函数
select count(1) as count from student;
select avg(age) as avg_age from student;

// 删除表中所有数据(表还在)
delete from student;
// 删除某个xxx
delete from student where age = 18;


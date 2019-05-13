// 数据库操作
show dbs; show databases;//展示所有数据库
use xx;//使用某个库 ->db.dropDatabase();//删除该库
use 新库名;//其等同于创建了新库，但此时show dbs是不展示的，系统默认其是误操作，此时需要创建里面的集合才能显示
db.getName();//获取当前数据库的名字
db.getMongo();//获取IP地址端口号


// 集合操作
collection;//等同于mysql的table
show collections;//show tables
// 创建集合
db.createCollection("集合名");//create table <表名>
// 删除集合
db.collection.drop();//db.xx.drop();//删除某个


// 集合中数据
// 增加数据
db.student.save({name:"paul",age:18,sex:1});
// 查询数据
db.student.find();//查询所有
db.student.find().count(); //查询总条数，等同于select count(*) from student;
db.student.find({age: 19});//查询age=19
db.student.find({age:{$gt:19}});//age>19,  条件写成对象形式
db.student.find({age:{$gte:19}});//age>=19    equal
db.student.find({age:{$lte:19}});//age>=19    equal
db.student.find( {age: { $gte:19, $lt: 20}} )

db.student.distinct('name');//按某个属性去重，其会把下面重复的去掉,但不会删除原数据，只是此次操作展示而已，select distinct name from student;//sql语句

db.student.find( {$and: [ {}, {} ] } )
db.student.find({$and:[{name:'mary'},{age:19}]});//and且操作
db.student.find({$or:[{name:'mary'},{age:19}]});//or或操作


db.student.find().limit(2);//限制条数
db.student.find().skip(2).limit(2);//跳过X个限制X个 -> 前端翻页实现

// 删除数据
db.student.remove({sex:0});//sql语句：delete from student where sex = 0;

// 更改数据
db.student.update({name:"paul"},{$set:{age:10}},false,true);//第三个参数upsert,找到就更改，找不到就添加insert,一般不用直接写false,第四个参数表示若有多个数据的时候，若写false,其只会更改查询到的首个，所以要写true,按这么写就可以

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://127.0.0.1:27017/test2';

//增 删 改 ->写操作; 查 -> 读操作; 目前主要是读操作，然后渲染到页面上
//一般都有回调函数，表示实现操作后需要干什么？ 例如：增加数据后需要干什么
//插入1个
function insert(collection,obj,callback){
    mongo.connect(url,function(error,db){
        if(error == null){
            var database = db.db('test2');
            database.collection(collection).insertOne(obj,callback);
            db.close();
        } else {
            console.log(error);
        }
        db.close();
    })
}

//批量插入 objs传入数组
function insertMany(collection,objs,callback){
    mongo.connect(url,function(error,db){
        if(error == null){
            var database = db.db('test2');
            database.collection(collection).insertMany(objs,callback)
            db.close();
        } else {
            console.log(error);
        }
        db.close();
    })
}

//查询 where表示查询添加： {}查询所有、{age:10}、{age:{$gt:10}}
function find(collection,where,callback){
    mongo.connect(url,function(error,db){
        if(error == null){
            var database = db.db('test2');
            // toArray();转换为数组
            database.collection(collection).find(where).toArray(callback);
            db.close();
        } else {
            console.log(error);
        }
        db.close();
    })
}

//更改 -> 可批量更改(封装较复杂，用处不大)
function updateData(collection,where,update,callback){
    mongo.connect(url,function(error,db){
        if(error == null){
            var database = db.db('test2');
            database.collection(collection).updateOne(where,update,callback);
            db.close();
        } else {
            console.log(error);
        }
        db.close();
    })
}


//删除 -> 可批量删除(封装条件较复杂，建议写入的时候标识唯一，删除的时候删除即可)
function deleteData(collection,where,callback){
    mongo.connect(url,function(error,db){
        if(error == null){
            var database = db.db('test2');
            database.collection(collection).deleteOne(where,callback);
            db.close();
        } else {
            console.log(error);
        }
        db.close();
    })
}



module.exports = {
    insert,
    insertMany,
    find,
    updateData,
    deleteData,
}






// insert('student',{name:'harden',age:22,sex:1},function(error,res){
//     if(error == null){
//         console.log(res);
//     }else {
//         console.log(err);
//     }
// });




// mongo.connect(url,function(error,db){
//     if(error == null){
//         // 创建集合 -> 一般都是直接创建好集合，后续增删改查，不会在nodejs中创建
//         // var database = db.db('test2');// db.db();等同于use xx; ->使用某个库
//         // database.createCollection('teacher',function(error,res){
//         //     if(error == null){
//         //         console.log(res);
//         //     }else{
//         //         console.log(error);
//         //     }
//         // })
//         // 插入
//         var database = db.db('test2');
//         var obj = {name:'harden',age:22,sex:1}
//         database.collection('student').insertOne(obj,function(error,res){
//             if(error == null){
//                 console.log(res);
//             }else {
//                 console.log(err);
//             }
//             db.close();
//         })
//     }else {
//         console.log(error);
//     }
//     db.close();
// })

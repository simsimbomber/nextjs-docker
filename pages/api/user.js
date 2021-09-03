import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

//Userテーブルからデータを取得する
export default async function getUser(req,res){
    try {
        const { method } = req;
        //db接続
        const db = await open({
            filename:'./db/nextSns.db',
            driver: sqlite3.Database
        });
        switch (method) {
            case 'GET':
                const data = await db.all('select * from User');
                res.status(200).json({data:data, method:req.method}); // json 形式でデータを取得
                break;
            case 'POST':
                const id = req.body.id;
                const name = req.body.name;
                const pw =  req.body.pw;
                const mail_address = req.body.mail_address;

                // await db.all('insert into User values ('+id+','+name+","+pw+","+mail_address+')');
                res.status(200).json(console.log(id));
                break;
        }
    } catch (err){
        res.status(500).json({ statusCode: 500, message: err.message });
    }


//    //db接続
//    const db = await open(
//        {filename:'./db/nextSns.db',
//        driver: sqlite3.Database}
//    );

//    const user = await db.all('select * from User');
//    res.json(user);
}
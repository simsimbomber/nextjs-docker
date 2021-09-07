import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

//Userテーブルからデータを取得する
export default async (req,res) => {
    try {
        const { method } = req;
        //const db = new sqlite3.Database('./db/nextSns.db');
        //db接続
        const db = await open({
            filename:'./db/nextSns.db',
            driver: sqlite3.Database
        });

        switch (method) {
            case 'GET':
                // db.serialize(() => {
                //     db.run(`insert into User values (select * from User)`);
                // });
                const data = await db.all('select * from User');
                res.status(200).json({data:data, method:req.method}); // json 形式でデータを取得
                break;
            case 'POST':
                const reqId   = req.body.id;
                const reqName = req.body.name;
                const reqPw   = req.body.pw;
                const reqMail = req.body.mail_address;

                await db.all(`insert into User values ('${reqId}','${reqName}','${reqPw}','${reqMail}')`);
                // db.serialize(() => {
                //     db.run(`insert into User values ('${reqId}','${reqName}','${reqPw}','${reqMail}')`);
                // });
                
                // res.status(200).json({req:req});
                break;
        }
    } catch (err){
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
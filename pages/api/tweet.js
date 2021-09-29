import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

//Tweetテーブルからデータを取得する
export default async (req,res) => {
    try {
        const { method } = req;
        //db接続
        const db = await open({
            filename:'./db/nextSns.db',
            driver: sqlite3.Database
        });

        switch (method) {
            case 'GET':
                //const data = await db.all(`select * from Tweet where create_user_id='${req.body.create_user_id}.order by created_time desc limit 10` );
                const data = await db.all(`select * from Tweet order by created_time desc limit 10` );
                res.status(200).json({data:data, method:req.method}); // json 形式でデータを取得
                break;
            case 'POST':
                const reqId            = req.body.id;
                const reqCreatedUserId = req.body.create_user_id;
                const reqContents      = req.body.contents;
                const reqFavoriteCount = req.body.favorite_count;
                const reqRetweetCount  = req.body.retweet_count;
                const reqCreatedTime   = req.body.created_time;

                await db.all(`insert into Tweet values ('${reqId}','${reqCreatedUserId}','${reqContents}','${reqFavoriteCount}','${reqRetweetCount}','${reqCreatedTime}')`);
                res.status(200).json({statusCode: 200, method:req.method}); // json 形式でデータを取得
                break;
        }
    } catch (err){
        res.status(500).json({ statusCode: 500, message: err.message });
    }
}
import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

//Userテーブルからデータを取得する
export default async function getUser(req,res){
   
   //db接続
   const db = await open(
       {filename:'./db/nextSns.db',
       driver: sqlite3.Database}
   );

   const user = await db.all('select * from User');
   res.json(user);
}
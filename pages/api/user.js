import sqlite3 from 'sqlite3';
import {open} from 'sqlite';

//personテーブルからデータを取得する
export default async function getUser(req,res){
   
   //db接続
   const db = await open(
       {filename:'./mydb.sqlite',
       driver: sqlite3.Database}
   );

   const user = await db.all('select * from User');


   res.json(user);
}
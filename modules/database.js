import pgPromise from "pg-promise";
 
const pgp = pgPromise({});
const config = {
	db: {
		// 設定項目: https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax
		host: "localhost",
		port: 5432,
		database: "postgres",
		user: "admin",
		password: "admin",
		max: 10, // size of the connection pool
		query_timeout: 60000 // 60sec
	}
};
 
export const sqlExecuter = pgp(config.db);
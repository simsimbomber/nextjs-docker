import { sqlExecuter } from "../../modules/database";
 
export default async (req, res) => {
	const data = await sqlExecuter.any(
               "select * from tweet;"
        );
	res.status(200).json({
		data
    });
};
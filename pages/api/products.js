import {dbQuery} from '../../lib/mysql-connect.js';

const handler = async(_,res) =>{

  let products = await dbQuery('select * from products');
  return res.json(products);
}
export default handler;

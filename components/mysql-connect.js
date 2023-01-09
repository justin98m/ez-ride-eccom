import mysql from "mysql2";

const con = mysql.createConnection({
        //should be a hidden env var
        connectionLimit:5,
        host: process.env.MYSQLENDPTLOCAL,
        user: process.env.MYSQLUSERLOCAL,
        password: process.env.MYSQLPASSLOCAL,
        database: process.env.DATABASELOCAL,
      }
);
// console.log(process.env.MYSQLENDPTREMOTE);
// const con = mysql.createConnection({
//         //should be a hidden env var
//         connectionLimit:5,
//         host: process.env.MYSQLENDPTREMOTE,
//         user: process.env.MYSQLUSERREMOTE,
//         password: process.env.MYSQLPASSREMOTE,
//         database: process.env.DATABASEREMOTE,
//       }
// );


export default function query(sql){
  return new Promise(function(resolve,reject){
    con.query(sql,(err,result)=>{
      if(err){
        reject({err});
      }
      resolve({result});
    })
  })
}

// export default async function excuteQuery({ query}) {
//   try {
//     const results = await db.query(query);
//     await db.end();
//     return results;
//   } catch (error) {
//     return { error };
//   }
// }
//
// console.log(executeQuery({query :'select * from products'}));

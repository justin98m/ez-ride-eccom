import mysql from "mysql2";

const con = mysql.createConnection({
        host: process.env.sql.ENDPTLOCAL,
        user: process.env.sql.USERLOCAL,
        password: process.env.sql.PASSLOCAL,
        database: process.env.sql.DATABASELOCAL,
      }
);

export function dbQuery(sql){
  return new Promise(function(resolve,reject){
    con.query(sql,(err,result)=>{
      if(err){
        reject({err});
      }
      resolve({result});
    })
  })
}

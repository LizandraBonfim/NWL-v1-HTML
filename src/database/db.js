const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./src/database/database.db");

 db.serialize(() => {
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT, 
//             address2 TEXT, 
//             state TEXT, 
//             city TEXT,
//             items TEXT
//         );
//     `);

//     const query = `
//     INSERT INTO places(
//         image, 
//         name, 
//         address, 
//         address2, 
//         state, 
//         city, 
//         items
//         ) VALUES (? , ? , ? , ? , ? , ?, ?);
//     `

//     const values = ["https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80",
//         "Coletoria",
//         "Guilherme Gambala",
//         "Numero 224",
//         "Santa Catarina",
//         "Rio Grande do Sul",
//         "Vidros"];


//     function afterInsertData(error) {
//         if(error) throw error;
//         console.log("Cadastrado");

//         //this  - ira mostrar os dados cadastrados no console
//         console.log(this);
//     }

//     // db.run(query, values , afterInsertData);

//     db.all(`SELECT * FROM places`, function(error, rows) {
//         if(error) {
//             return console.log(error);
//         }

//         console.log("Itens cadastrados");
//         console.log(rows)
//     });

//db.run(`DELETE FROM places WHERE id = ? `, [1])

 })

module.exports = db;    
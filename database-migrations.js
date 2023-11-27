

const sqlite3 =require('sqlite3').verbose();
const Database = {
    
    async init() {
        this._connection = new sqlite3.Database('./test.db',sqlite3.OPEN_READWRITE, (err) => {
            if (err) return rejects(err);
            return resolve(true);
        
        });
    },
    
    async createUsersTable() {
        return new Promise((resolve, reject) => {
           const sql = `CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,password,email)`;
           this._connection.run(sql, (err) => {
              if (err) return rej(err);
              return res(true);
           });
        });
    },
    
    async İnterUser(userData) {
        return new Promise((resolve,reject) => {
            sql = 'INSERT INTO users(frist_name,last_name,password,email) VALUES (?,?,?,?)';
            this._connection.run(sql,[userData.fristname,userData.lastname,userData.password,userData.email],
                (err) => {
                    if (err) return reject(err);
                    return resolve(true);
                });
        });
    },

    async getUsers() {
        return new Promise((resolve,reject) => {
            this._connection.all('SELECT * FROM users' , {}, (err, rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    },

    async createUser_linksTable() {
        return new Promise((resolve,reject) => {
          const sql = `CREATE TABLE User_links(id INTEGER PRIMARY KEY,user_id,url,type,created_at)`;
          this._connection.run(sql, (err) => {
            if (err) return reject(err);
            return res(true);
          });  
        });
    },

    async İnterUser_links() {
        return new Promise((resolve,reject) => {
            sql = 'INSERT INTO User_links(user_id,url,type,created_at) VALUES (?,?,?,?)';
            this._connection.run(sql,[userData.user_id,userData.url,userData.type.userData.created_at],
               (err) => {
                if (err) return reject(err);
                return resolve(true);
               });
        });
    },

    async getUser_links() {
        return new Promise((reolve,reject) => {
            this._connection.all('SELECT * FROM User_links', {}, (err,rows) => {
                if (err) return reject(err);
                return resolve(rows);
            });
        });
    }


    
};

module.exports = Database;
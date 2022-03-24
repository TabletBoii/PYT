const sql = require("mssql");

const conn = {
  database: "TourPick",
  server: "DESKTOP-4RUNDI0\\PICKTOURSERVER",
  driver: "msnodesqlv8",
  port: 51862,
  user: "sa",
  password: "eg2341",
  options: {
    trustServerCertificate: true
  }
};
async function sqlConnection() {
  try{
    await sql.connect(conn)
    console.log("SQL server connection established")
  }catch (e){
    console.log("Server error", e)
    process.exit(1)
  }
}
module.exports = sqlConnection()
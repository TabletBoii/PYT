const db = require('../dbConnection')
const bcrypt = require('bcrypt')
const {validationResult} = require("express-validator");

class AuthController{
  async logIn(req, res) {
    try{
      const {username, password} = req.body
      const candidate = await db.query('SELECT * FROM adminauth WHERE username=$1', [username])
      if(candidate.rows.length===0){
        return res.status(401).json({message:username+' does not exists'})
      }

      const userPassword = await db.query('SELECT password FROM adminauth WHERE username=$1', [username])
      const isMatch = await bcrypt.compare(password, userPassword.rows[0].password)
      if(!isMatch){
        return res.status(401).json({message:"Wrong password, try again"})
      }

      const adminID = await db.query('SELECT adminid FROM adminauth WHERE username=$1', [username])
      console.log(adminID.rows[0].adminid)
      res.json({adminId: adminID.rows[0].adminid})
    }catch (e) {
      res.status(500).json({message:e})
    }
  }

  async signUp(req, res) {
    try{
      const error = validationResult(req)

      if (!error.isEmpty()) {
        return res.status(400).json({
          errors: error.array(),
          message: 'Incorrect username or password'
        })
      }

      const {username, password} = req.body

      const candidate = await db.query('SELECT * FROM adminauth WHERE username=$1', [username])

      if(candidate.rows.length>0){
        return res.status(409).json({message:username+' already exists'})
      }

      const hashedPassword = await bcrypt.hash(password, 12)

      await db.query('INSERT INTO adminauth(username, password) VALUES($1, $2)', [username, hashedPassword]).catch(error =>{
        res.json({
          message:error
        })
      })
      res.status(201).json({message:'User completely created'})
    }catch (e) {
      res.status(500).json({message:e})
    }

  }

}

module.exports = new AuthController()


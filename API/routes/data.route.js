const {Router} = require("express")
const db = require('../dbConnection')
const router = Router()



router.get(
    '/pt/tours/',
    async(req,res,next)=>{
      try{

      const touragentList = await db.query('SELECT touragentname FROM touragents')

      res.send(
          touragentList.rows
      )
    }catch (e) {
      res.status(500).json({message:e})
    }
    next()
  }
)

module.exports = router
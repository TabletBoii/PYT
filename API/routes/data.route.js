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
router.get(
    '/pt/counties/',
    async(req,res,next)=>{
      try{

        const countryList = await db.query('SELECT countryname FROM countries')

        res.send(
            countryList.rows
        )
      }catch (e) {
        res.status(500).json({message:e})
      }
      next()
    }
)

router.post(
    '/pt/searchTours',
    async (req, res) => {
      try{
        const { country, date } = req.body

        const searchQuery = await db.query('SELECT * FROM tours WHERE descountry=$1 AND tourbegdate=$2', [country, date])
        if(searchQuery.rows.length===0){
          return res.json({message: 'Туры по вашему запросу не найдены'})
        }

        return res.json({searchQuery})
      }catch (e){
        res.status(500).json({message: e.message})
      }
    }
)

router.post(
    '/pt/app',
    async (req, res) => {
      try{
        const {firstname, secondname, patronymic, address, selectedDate, telephone} = req.body

        await db.query('INSERT INTO clients(firstname, secondname, patronymic, clientaddress, birthdate, telephone) VALUES($1, $2, $3, $4, $5, $6)',
            [firstname, secondname, patronymic, address, selectedDate, telephone]
            )
        return res.status(201).json({message: 'Client successfully added'})
      }catch (e) {
        return res.status(500).json({message: e.message})
      }
    }
)

router.get(
    '/admin/touragent-list',
    async (req, res) => {
      try{
        const tourAgentsResult = await db.query('SELECT * FROM touragents')

        if(tourAgentsResult.rows.length===0){
          return res.json({message: 'Турагенты по вашему запросу не найдены'})
        }

        const result = tourAgentsResult.rows

        res.send(result)
      }catch (e) {
        return res.status(500).json({message: e.message})
      }
    }
)

/*router.post(
    '/admin/pt/showApplications',
    async(req,res)=>{
      try{
        const sear
      }catch (e) {
        res.status(500).json({message: e.message})
      }
    }
)*/

module.exports = router
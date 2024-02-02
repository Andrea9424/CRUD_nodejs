const catchError = require('../utils/catchError');
const Users = require('../models/Users');
const { where } = require('sequelize');

const getAll = catchError(async(req, res) => {
     const users = await Users.findAll()
    
    return res.json(users)

   
});
console.log(getAll)
const create = catchError(async (req, res) =>{
   const user= req.body
   const createUser = await Users.create(user)
   return res.status(201).json(createUser)
   
})

const getOne = catchError(async (req, res) => {
    const {id} = req.params
    const user = await Users.findByPk(id)
   if(!user) return res.status(404).json({
    message : "User not found"
   })
    return res.json(user)
})

const deletUser = catchError(async (req, res) => {
    const {id} = req.params
    const userDelet = await Users.destroy({where:{id}})
    if(!userDelet) return res.status(404).json({message:"User not found"})
    return res.json(Users)

})
const updateUser = catchError(async(req,res) =>{
    const {id} = req.params
    const user = req.body
    const userUpdate = await Users.update(user, {where: {
        id}, returning:true})
         if(userUpdate[0] === 0) return res.status(404).json({
            message: "User not found"})
        return res.json(userUpdate[1][0])
    })


module.exports = {
    getAll,
    create,
    getOne,
    deletUser,
    updateUser
}
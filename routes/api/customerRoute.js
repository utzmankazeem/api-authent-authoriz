import express from 'express'
const router = express.Router()
import {getData, createData, updateData, deleteData, getAdata} from '../../controller/customerController.js'


router.route('/')
    .get(getData)
    .post(createData)
    
router.route("/:id")
    .patch(updateData)
    .delete(deleteData)
    .get(getAdata)

export default router;


    
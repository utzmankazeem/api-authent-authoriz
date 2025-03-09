import express from 'express'
const router = express.Router()
import {getData, createData, updateData, deleteData, getAdata} from '../../controller/customerController.js'
import { CATE_LIST } from '../../config/cateList.js';
import { verifyCategs } from '../../middlewares/verifyCateg.js';


router.route('/')
    .get(getData)
    .post(verifyCategs(CATE_LIST.Admin, CATE_LIST.Editor), createData)
    
router.route("/:id")
    .patch(verifyCategs(CATE_LIST.Admin, CATE_LIST.Editor), updateData)
    .delete(verifyCategs(CATE_LIST.Admin), deleteData)
    .get(getAdata)
export default router;


    
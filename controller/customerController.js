import Cust from '../model/User.js'

export const getData = async (req, res) => {
    const customer = await Cust.find();
    if (!customer) return res.status(204).json({ 'message': 'No customer found'});
    return res.status(200).json({ success: true, message: "success", customer});
}

export const createData = async (req, res) => {
    const {username, pass} =  req.body;
    if(!username || !pass) {
        return res.status(400).json({'message': 'customer required.'})
    }
    try {
            const result = await Cust.create({
                username,
                pass
            })
            return res.status(201).json({ 'message': `${result}`});
    } catch (error) {
        console.log(error)
    }
}

export const updateData = async (req, res) => {
    if (!req.params.id) {
        return res.status(400).json({'message': 'ID parameter is required'})
    }
    const customer = await Cust.findOneAndUpdate({_id: req.params.id }, req.body).exec();
    if (!customer) {
        return res.status(404).json({ "message": `No customer matches ID ${req.params.id}.` });
    }
    return res.status(201).json({ 'message': `${customer}`});;
}

export const deleteData = async (req, res) => {
    if(!req.params.id) 
        return res.status(400).json({ "message": `No customer matches ID ${req.params.id}.`})
    const customer = await Cust.findOne ({_id: req.params.id}).exec();
    if(!customer) {
        return res.status(404).json({'message': `customer matches ID ${req.params.id} not found`})
    }
    const result = await Cust.deleteOne(customer);
    return res.status(201).json({ 'message': `customer deleted`});;
}

export const getAdata = async (req, res) => {
    if(!req.params.id) return res.status(400).json({ "message": `No customer matches  ${req.params.id} ID.`})
    
    const customer = await Cust.findOne({_id: req.params.id}).exec();
    if(!customer) {
        return res.status(204).json({'message': `customer matches ID ${req.params.id}found`})
    }
    return res.status(201).json({ 'message': customer});
}
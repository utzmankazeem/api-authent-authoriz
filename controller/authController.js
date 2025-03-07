import Cust from '../model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    const { username, pass, category } = req.body;
    if(!username || !pass) return res.status(400).json({'message': 'require user and password'});
 	
 	//check for duplicate  
    const duplicate = await Cust.findOne({username});
    if (duplicate) return res.sendStatus(409); //conflict
    try {
        //encrypt pass
        const hash = await bcrypt.hash(pass, 10);
        //create and store new Cust
       const result = await Cust.create({
       	username,
        category,
       	pass : hash
       });
       res.status(201).json({ 'success': `New user ${result} created`})
    } catch (error) {
        res.status(500).json({'message': error.message})
    }
}

export const login = async (req, res) => {
    const { username, pass } = req.body;
    if(!username || !pass) return res.status(400).json({'message': 'require user and password'});
    
    //check d for duplicates user & pass
    const customer = await Cust.findOne({username});
    if (!customer) return res.sendStatus(401); //unauthorized
    //evaluate pass
    const match = await bcrypt.compare(pass, customer.pass);
    if(match){
        const category = Object.values(customer.category).filter(Boolean); 
        // create JWT..before we logged user In
        const accessToken = jwt.sign(
            { 
                "UserInfo": {
                    "username": customer.username,
                    "category": category
                }
             },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '30s'} //timing can increase
        );
        const refreshToken = jwt.sign(
            { "username": customer.username },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '1d'}
        );
        // Saving refreshToken with current user
        customer.refreshToken = refreshToken;
        const result = await customer.save();
        console.log(result);
            console.log(category);

        //create Secure Cookie with refresh token
        res.cookie('jwt', refreshToken, { 
            httpOnly: true, 
            sameSite: 'None', 
            //Secure: 'true', //add in production
            maxAge: 24 * 60 * 60 * 1000}); //allowedOrigin Access
        res.json({ category, accessToken });
    } else {
        res.sendStatus(401);
    }
}

// const secrets = async (req, res) => {
//     if(req.isAuthenticated()){
//         res.render("secrets");
//     } else {
//         res.redirect('/login');
//     }
// }

// const logout = async (req, res) => {
//         req.logout();
//         res.redirect('/')
//  }

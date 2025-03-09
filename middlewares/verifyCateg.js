export const verifyCategs = (...allowedCategs) => {
    return (req, res, next) => {
        if (!req?.category) return res.sendStatus(401);
        const categoryArray = [...allowedCategs];
        console.log(categoryArray);
        console.log(req.category);
        const result = req.category.map(category => 
            categoryArray.includes(category)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}
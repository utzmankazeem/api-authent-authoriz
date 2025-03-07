//Whitelist are the services that can only access this server/endpoint
const whiteList = [
    'https://mysite.com', 
    'http://localhost:2000'
]
export const corsOptions = {
    origin: (origin, callback) => {//!origin only applies in dev..remove in production
        if(whiteList.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}
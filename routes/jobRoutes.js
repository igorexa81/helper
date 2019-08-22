const router = require("express").Router();
const jobController = require("../controllers/jobController")
const jwt = require("jsonwebtoken");

router.use((req, res, next) => {
    try {
        // check the token
        // console.log(req.headers.token);

        let token = req.headers.token;
        let decoded = jwt.verify(token, "igor");
        let userId = decoded.id;
        req.userId = userId;
        next();
    } catch (error) {
        throw new Error(error);
    }


})

router.route("/jobs")
    .post(jobController.create)
    .get(jobController.findAll);

router.route("/findHandyman")
    .get(jobController.findHandyman)

router.route("/findGroceries")
    .get(jobController.findGroceries)

router.route("/findCleaners")
    .get(jobController.findCleaners)
    
router.route("/findYardworkers")
    .get(jobController.findYardwork);

router.route("/view")
    .get(jobController.findAll);
    
module.exports = router;
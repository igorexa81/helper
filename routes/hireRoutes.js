const router = require("express").Router();
const hireController = require("../controllers/hireController")
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

router.route("/hire")
    .post(hireController.create)
    .get(hireController.findAll);

router.route("/hire/:hireId")
    .delete(hireController.remove)

router.route("/hire/findAllHireWithDetail")
    .get(hireController.findAllHireWithDetail);

module.exports = router;
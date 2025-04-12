const express = require("express");
const adminController = require("../controllers/admin-controller");
const authMiddleware = require("../middlewares/auth-Middleware");
const adminMiddleware = require("../middlewares/admin-middleware");
const router = express.Router();

router.get('/users',authMiddleware, adminMiddleware, adminController.getAllUsers);
router.delete('/users/delete/:id',authMiddleware, adminMiddleware, adminController.deleteUserById);
router.get('/contacts',authMiddleware, adminController.getAllContacts);


module.exports = router;

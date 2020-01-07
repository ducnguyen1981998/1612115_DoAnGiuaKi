const express = require("express"); 
const router = express.Router();

router.get('/',(req, res)=>{
    res.json({
        message:"lock"
    });
});
router.post('/signup',(req,res)=>{
    res.json({
        message:'check'
    })
})

module.exports = router
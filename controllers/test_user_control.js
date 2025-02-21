const test_api =(req,res)=> {
    res.status(200).send("Thois is test API");
}

module.exports = {test_api};
const getData = (req,res) => {
    try{
        const data = {
            source : "Service 1 - users",
            data : [
                {
                    nama : 'joko',
                    umur : 85
                },
                {
                    nama : 'wido',
                    umur : 82
                },
                {
                    nama : 'do',
                    umur : 101
                }
            ]
        }

        res.json({statusCode:200, data});
    }catch(e){
        res.json({statusCode:500, message:'kena error nih'});
    }
}

module.exports = {getData};
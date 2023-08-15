const perpusController = {};

var perpus = [
    {
        namaPeminjam: "Rizky",
        namaBuku: "Harry Potter",
        tanggalPinjam: "2020-01-01",
    },
    {
        namaPeminjam: "Ahmad",
        namaBuku: "The importance of being earnest",
        tanggalPinjam: "2020-04-12",
    },
    {
        namaPeminjam: "Daniel",
        namaBuku: "Sherlock Holmes",
        tanggalPinjam: "2020-11-23",
    },
]

perpusController.perpus = (req, res) => {
    return res.status(200).send({
        status: 200,
        data: perpus,
    })
};

perpusController.perpusPost = (req, res) => {
    if(req.body.namaPeminjam == null || req.body.namaBuku == null ||
        req.body.tanggalPinjam == null){
        return res.status(400).send({
            status: 400,
            message: "Data tidak lengkap",
        })
    }
    perpus.push(req.body)
    return res.status(200).send({
        status: true,
        data: perpus,
    })
};

perpusController.perpusGetbyId = (req, res) => {
    try{
     if(perpus[req.params.id - 1] == null)
        throw new Error('Data tidak ditemukan');
         return res.status(200).send({
            status: true,
            data: perpus[req.params.id - 1]
        }); 
    }catch(error){
        return res.status(404).send({
              status: false,
              data: error.message
        });
    }
};

perpusController.perpusDeletebyId = (req, res) => {
    if(perpus[req.params.id - 1] == null){
        return res.status(404).send({
            status: false,
            message: "Data tidak ditemukan",
        })
    } else {    
        perpus.splice(req.params.id - 1, 1)
        return res.status(200).send({
            status: true,
            data: perpus,
        })
    }
};

perpusController.perpusUpdatebyId = (req, res) => {
    if(perpus[req.params.id - 1] == null) {
       return res.status(200).send({
            status: false,
            data: 'Data tidak ditemukan'
        });
    } else {
      if(req.body.namaPeminjam == null || req.body.namaBuku == null || req.body.tanggalPinjam) {
        return res.status(400).send({
            status: false,
            data: 'Data tidak lengkap'
        });
      }
    perpus[req.params.id - 1] = req.body;
    return res.status(200).send({
        status: true,
        data: perpus[req.params.id - 1]
        });
    }
};
    

module.exports = perpusController;
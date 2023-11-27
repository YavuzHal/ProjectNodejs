const { hashSync, compareSync } = require('bcrypt');
const express = require('express');
const server = express();

server.get('/:isim/:sifre',async function(req,res,){
    const isim = req.params.isim;
    const sifre = req.params.sifre;
    const hashlisifre = await hashSync(sifre);
    const sifrelerEsitMi = await compareSync(sifre,hashlisifre);
    res.send(
      +  `Isim: ${isim} <br>`
      +  `Girilen Sifre: ${sifre} <br>`
      +  `Bcrypt Sifre: ${hashlisifre} <br>`
      +  `Sifreler Uyusuyo Mu: ${sifrelerEsitMi} <br>`
    );
});
server.listen(8000, function(){
    console.log("Server calisiyor");
});

const bcrypt = require('bcrypt');
const saltRounds = 12;
const txtprefix = "prefix";

async function hashSync(txtsaf) {
    return await bcrypt.hash(`${txtprefix}${txtsaf}`, saltRounds);
}

async function compareSync(txtsaf, txtHashli) {
    return await bcrypt.compare(`${txtprefix}${txtsaf}`, txtHashli);
}
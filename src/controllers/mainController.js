const express = require('express');
const path = require('path');

const mainController = {
    home :(req, res)=>{
        res.sendFile(path.join(__dirname, "../views/home.html"))
    },
    aboutUs :(req, res)=>{
        res.sendFile(path.join(__dirname, "../views/about.html"))
}
};

module.exports = mainController
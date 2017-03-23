import express = require('express');
import { playerModel, IPlayer } from '../model';

var router = express.Router();


router.route('/').get(async (req, res, next) => {
    var allPlayer = await playerModel.find().exec();

    res.json({
        issucess: true,
        data: allPlayer
    });
});


export { router as playerRouter };




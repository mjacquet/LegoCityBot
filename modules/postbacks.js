"use strict";

let messenger = require('./messenger'),
    formatter = require('./formatter');


    exports.acheter = (sender,shipType) => {
        	console.log('acheter  ',shipType );
            	messenger.send({text: 'acheter'}, sender);
        };

    exports.fiche = (sender,shipType) => {
        	console.log('fiche technique',shipType );
          messenger.send(formatter.fiche(shipType), sender);
        };



exports.information = (sender) => {
	//console.log('information');
	//messenger.getUserInfo(sender).then(response => {
    	messenger.send(formatter.information(response), sender);
  //  });
};

/*
exports.link_postback = (sender, values) => {
	console.log('link_postback');
    messenger.send({text: `Link`}, sender);
};
*/
exports.image_postback = (sender, values) => {
	console.log('image_postback');
	messenger.getUserInfo(sender).then(response => {
    	messenger.send(formatter.imageShow(response), sender);
    });
};

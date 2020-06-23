const fs = require('fs');
const { MessageEmbed } = require('discord.js');
let xp = require("../xp.json");

module.exports = {
	name: 'classement',
	description: 'Affiche un classement des niveaux.',
	execute(client, message, args){
		const sortedKeysByLevel = Object.keys(xp).sort((key1, key2) => xp[key2]['level'] - xp[key1]['level'] === 0 ? xp[key2]['xp'] - xp[key1]['xp'] : xp[key2]['level'] - xp[key1]['level']);

		const embedClassement = new MessageEmbed()
			.setColor("#13a2ce")
			.setTitle("Classement !")
			for (i=0; i < 5; i++) {
				if(i==0){suff = 'er'}else{suff = 'ème'};
				embedClassement.addField(i+1+suff+' !', '<@'+sortedKeysByLevel[i]+'>, **Niveau '+xp[sortedKeysByLevel[i]].level+'**');
			}
		message.channel.send(embedClassement);
	}
}
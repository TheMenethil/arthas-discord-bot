const { MessageEmbed } = require("discord.js");
let xp = require("../xp.json");

module.exports = {
	name: 'niveau',
	description: 'Affiche l\'expérience de la personne.',
	execute(client, message, args){
		if(!xp[message.author.id]){
			xp[message.author.id] = {
				xp : 0,
				level : 1
			};
		}

		let curXp = xp[message.author.id].xp;
		let currLvl = xp[message.author.id].level;
		let nxtLvl = xp[message.author.id].level * 30;
		let diff = nxtLvl - curXp;

		let lvlInfo = new MessageEmbed()
					.setColor("#13a2ce")
					.setTitle(`${message.author.tag} infos :`)
					.setThumbnail(message.author.displayAvatarURL())
					.addField('Niveau actuel :', currLvl, true)
					.addField('Xp actuelle :', curXp + ' xp', true)
					.setFooter('Il te manque '+ diff +'xp pour monter de niveau', message.author.displayAvatarURL);
		message.channel.send(lvlInfo);
	}
}
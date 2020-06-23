const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dé.png');
const random = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
	name: 'dés',
	description: 'Jette trois dés à six faces.',
	execute(client, message, args){
		const embed = new MessageEmbed()
			.setColor('#13a2ce')
			.setTitle("Lancé de trois dés")
			.attachFiles(diceImg)
			.addFields(
				{ name: 'Dé 1', value: 'J\' ai obtenu : ' + random() + ' !', inline: true },
				{ name: 'Dé 2', value: 'J\' ai obtenu : ' + random() + ' !', inline: true },
				{ name: 'Dé 3', value: 'J\' ai obtenu : ' + random() + ' !', inline: true },
			);
		message.channel.send(embed);
	}
}
const { MessageEmbed, MessageAttachment } = require("discord.js");
const diceImg = new MessageAttachment('./assets/img/dé.png');
const random = () => Math.floor(Math.random() * 6) + 1;

module.exports = {
	name: 'dé',
	description: 'Lance un dé à six faces.',
	execute(client, message, args){
		const embed = new MessageEmbed()
			.setColor('#13a2ce')
			.setTitle("Lancé de dé")
			.attachFiles(diceImg)
			.addField('Lancé :', 'J\' ai obtenu : ' + random() + ' !');
		message.channel.send(embed);
	}
}
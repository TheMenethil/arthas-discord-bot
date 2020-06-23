const { MessageEmbed, MessageAttachment } = require("discord.js");
const cassdalz = new MessageAttachment('./assets/img/Cass_Dal.png');

module.exports = {
	name: 'cassdal',
	description: 'Le meilleur des serveurs.',
	execute(client, message, args){
		const embedCassdal = new MessageEmbed()
			.setColor("#FFC0CB")
			.setTitle("Cass'Dal")
			.attachFiles(cassdalz)
			.setFooter("Artiste : "+"Ypermat#3885");

		message.channel.send(embedCassdal);
	}
}
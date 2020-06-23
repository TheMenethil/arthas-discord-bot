const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'kpop',
	description: 'Une idole pour les gouverner tous.',
	execute(client, message, args){
		const embedKpop = new MessageEmbed()
			.setColor("#FFC0CB")
			.setTitle("❤️ K-POP ❤️")
			.setDescription(`${message.author} TOI AUSSI TU ES FAN ?! Hyunaaaaaaaa !!! OMG ❤️❤️❤️❤️❤️❤️❤️❤️❤️`)
			.setURL('https://media1.tenor.com/images/a09857aacb1563b6865dbc3ec2684eb7/tenor.gif?itemid=8262788')
			.setImage('https://media1.tenor.com/images/a09857aacb1563b6865dbc3ec2684eb7/tenor.gif?itemid=8262788')
			.setFooter("Via Giphy");

		message.channel.send(embedKpop);
	}
}
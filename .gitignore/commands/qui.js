const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'qui',
	description: 'Explique l\'histoire d\'Arthas Menethil.',
	execute(client, message, args){
		const embed = new MessageEmbed()
			.setColor("#13a2ce")
			.setTitle("Qui suis-je ?")
			.setURL("https://fr.wikipedia.org/wiki/Arthas_Menethil")
			.setDescription("Arthas Menethil")
			.setThumbnail(client.user.displayAvatarURL())
			.addField("Court résumé :", "Arthas Menethil est un personnage de fiction de la série de jeux vidéo et de romans Warcraft créé par Blizzard Entertainment. Arthas fait son apparition dans Warcraft III dans lequel il incarne un jeune paladin, prince du royaume de Lordaeron, luttant contre une invasion de morts-vivants. Après avoir été corrompu par le Roi Liche grâce à une épée maléfique qu\'il découvre dans les terres glacées de Norfendre, il sert ce dernier et participe à la chute de l\'Alliance. Il parvient ensuite à libérer le Roi Liche avant de prendre sa place sur le Trône de Glace, position qu\'il occupe toujours dans World of Warcraft jusqu\'à ce que Tirion Fordring parvienne à le vaincre et que Bolvar Fordragon prenne sa place.")
			.setTimestamp()
			.setFooter("Via Wikipédia : Arthas_Menethil");

			message.channel.send(embed);
	}
}
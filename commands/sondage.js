const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'sondage',
	description: 'Créé un sondage.',
	execute(client, message, args){
		const agree = "👍";
		const disagree = "👎";

		let params = message.toString().split('+');
		let pollQuestion = params[2];
		let pollTime =  parseInt(parseInt(params[3])*60000);
		let pollAuthor = message.author.username;

		message.delete().then(function (message) {

			const sondage = new MessageEmbed()
				.setColor("#13a2ce")
				.setTitle("Sondage !")
				.addFields(
					{ name: 'Question :', value: pollQuestion},
					{ name: 'Temps :', value: pollTime/60000+' mins'}
				)
				.setFooter('Auteur : '+pollAuthor);

			message.channel.send(sondage)
			.then(function (message) {

				message.react(agree)
				message.react(disagree)

				const filter = (reaction, user) => reaction.emoji.name === "👍";
				const filtertwo = (reaction, user) => reaction.emoji.name === "👎";

				var up = 0;
				var down = 0;

				let collector = message.createReactionCollector(filter, { time: pollTime });
				let collectortwo = message.createReactionCollector(filtertwo, { time: pollTime });

				collector.on('collect', (reaction, collector) => {
					up++;
				});

				collectortwo.on('collect', (reaction, collectortwo) => {
					down++;
				});

				collector.on('end', collected => {
					up=up-2;
					console.log('collected '+ up +' reactions');
				});

				collectortwo.on('end', collected => {
					down=down-2;
					console.log('collected '+ down +' reactions');
				});

				setTimeout(function(){

					const resultat = new MessageEmbed()
					.setColor("#ff0000")
					.setTitle("Résultat du sondage !")
					.addFields(
						{ name: 'Question :', value: pollQuestion},
						{ name: 'Temps :', value: pollTime/60000+' mins'},
						{ name: 'Résultat :', value: up + ' votes OUI 👍 et '+ down +' votes non 👎 !'}
					)
					.setFooter('Auteur : '+pollAuthor);

					message.channel.send(resultat);

				}, pollTime+1000);
			});
		});
	}
}
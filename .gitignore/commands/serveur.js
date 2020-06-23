module.exports = {
	name: 'serveur',
	description: 'Teste la réponse du bot avec arguments.',
	execute(client, message, args){
		message.reply(`Je suis sur le serveur \"${message.guild.name}\".`);
	}
}
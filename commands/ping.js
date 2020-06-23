module.exports = {
	name: 'ping',
	description: 'Teste la réponse du bot.',
	execute(client, message, args){
		message.reply("Pong !");
	}
}
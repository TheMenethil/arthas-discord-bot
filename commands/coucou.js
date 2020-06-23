module.exports = {
	name: 'coucou',
	description: 'Salue le bot.',
	execute(client, message, args){
		message.channel.send('Coucou <@'+message.author.id+'> !');
	}
}
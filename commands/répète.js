module.exports = {
	name: 'répète',
	description: 'Répète le message envoyé et le suprime',
	execute(client, message, args){
		let cmd = '+répète ';
		let msg = message.toString().replace(cmd,'');
		message.delete().then(
			message.channel.send(msg)
		);
	}
}
module.exports = {
	name: 'tts',
	description: 'Lance un /tts agaçant.',
	execute(client, message, args){
		message.channel.send('W W W W W W W W W W', {
			tts: true
		})
	}
}
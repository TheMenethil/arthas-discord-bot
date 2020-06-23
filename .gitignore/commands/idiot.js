module.exports = {
	name: 'idiot',
	description: 'Donne un niveau d\'idiotie.',
	execute(client, message, args){
		let min = Math.ceil(0);
		let max = Math.floor(101);
		let cent = Math.floor(Math.random() * (max - min)) + min;
		message.channel.send('<@'+message.author.id+'> est idiot à '+ cent +'% !');
	}
}
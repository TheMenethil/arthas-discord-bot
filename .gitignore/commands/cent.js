module.exports = {
	name: 'cent',
	description: 'Donne une chiffre entre zéro et cent.',
	execute(client, message, args){
		let min = Math.ceil(0);
		let max = Math.floor(101);
		let cent = Math.floor(Math.random() * (max - min)) + min;
		message.reply('J\'ai obtenu : '+ cent +' !');
	}
}
const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'gif',
	description: 'Envoie un gif aléatoire.',
	execute(client, message, args){
		const rando_imgs = [
		'https://media.giphy.com/media/CZpro4AZHs436/giphy.gif',
		'https://media.giphy.com/media/WXB88TeARFVvi/giphy.gif',
		'https://media.giphy.com/media/13CoXDiaCcCoyk/giphy.gif',
		'https://media.giphy.com/media/p4xp4BjHIdane/giphy.gif',
		'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif',
		'https://media.giphy.com/media/8vQSQ3cNXuDGo/giphy.gif',
		'https://media.giphy.com/media/wUgWRubJHS7Ac/giphy.gif',
		'https://media.giphy.com/media/LHZyixOnHwDDy/giphy.gif',
		'https://media.giphy.com/media/l0He3O3ZXu6vpNbxK/giphy.gif',
		'https://media.giphy.com/media/3o6EhMDUHhSgpa4fTi/giphy.gif',
		'https://media.giphy.com/media/xT1R9D2MQoCFCHa30k/giphy.gif',
		'https://media.giphy.com/media/9cSoV6Ix51jr2/giphy.gif',
		'https://media.giphy.com/media/Saavhnp9YYN7a/giphy.gif',
		'https://media.giphy.com/media/Oj6uU1GJTC5OM/giphy.gif',
		'https://media.giphy.com/media/pladQGQugCvXG/giphy.gif',
		'https://media.giphy.com/media/n0RwyVCFyx6gg/giphy.gif',
		'https://media.giphy.com/media/xiN7gD9cxUUl2fmRLa/giphy.gif',
		'https://media.giphy.com/media/26tPo9rksWnfPo4HS/giphy.gif',
		'https://media.giphy.com/media/reJOGQ43nNeGk/giphy.gif',
		'https://media.giphy.com/media/fGuqeA6PiXINa/giphy.gif',
		'https://media.giphy.com/media/SggILpMXO7Xt6/giphy.gif',
		'https://media.giphy.com/media/mUrBX1TF0kCRi/giphy.gif',
		'https://media.giphy.com/media/GFHJXPCoVQEec/giphy.gif',
		'https://media.giphy.com/media/110F1JFzWKtiA8/giphy.gif',
		'https://media.giphy.com/media/1rM1x5cwSbsMX4Qdj0/giphy.gif',
		'https://media.giphy.com/media/G3773sSDJHHy0/giphy.gif',
		'https://media.giphy.com/media/1qB3EwE3c54A/giphy.gif',
		'https://media.giphy.com/media/l2blenzcLkFsQWpSDi/giphy.gif',
		'https://media.giphy.com/media/9Ji1s0nTBLlKQEhpLu/giphy.gif',
		'https://media.giphy.com/media/cRq8TJsIKmQRG/giphy.gif',
		'https://media.giphy.com/media/YOAkiZ5zOJBtPxOeYU/giphy.gif',
		'https://media.giphy.com/media/GFamofJHhruow/giphy.gif',
		'https://media.giphy.com/media/kd4C9nXj0PnphyfPB3/giphy.gif',
		'https://media.giphy.com/media/UtcBRO8cxulRzkrVLc/giphy.gif',
		'https://media.giphy.com/media/WoKqL8nGDJfFwGzrmR/giphy.gif',
		'https://media.giphy.com/media/PRLfq3DfMsOQw/giphy.gif',
		'https://media.giphy.com/media/jqTfETbYUgX1paLmhk/giphy.gif'
		];

		var img = rando_imgs[Math.floor(Math.random() * rando_imgs.length)];

		const embedGif = new MessageEmbed()
			.setColor("#13a2ce")
			.setTitle("Gif !")
			.setDescription(`${message.author} a demandé un gif !`)
			.setURL(img)
			.setImage(img)
			.setFooter("Via Giphy");

		message.channel.send(embedGif);
	}
}
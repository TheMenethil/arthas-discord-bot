const fs = require('fs');
const { Client, Collection, MessageEmbed } = require('discord.js');
let xp = require("./xp.json");

const client = new Client();
client.commands = new Collection();
 
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log(`Commande chargée : ${command.name}`);
}

client.on('ready', () => {
	console.log(`Bot connecté en tant que ${client.user.tag}`);
	client.user.setActivity('+aide pour en apprendre plus');
});

client.on("message", message => {
	if (message.author.bot) return;

	const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command != "niveau"){
		if (!client.commands.has(command)){
			var xpAdd = 1;
		}
		else{
			var xpAdd = parseInt(Math.floor(Math.random() * 8) + 3);
		}

		if(!xp[message.author.id]){
			xp[message.author.id] = {
				xp : 0,
				level : 1
			};
		}

		let curXp = xp[message.author.id].xp;
		let currLvl = xp[message.author.id].level;
		let nxtLvl = xp[message.author.id].level * 30;

		xp[message.author.id].xp = curXp + xpAdd;

		if(nxtLvl <= xp[message.author.id].xp){
			xp[message.author.id].level = currLvl +1;
			let lvlUp = new MessageEmbed()
				.setColor("#13a2ce")
				.setTitle(`${message.author.tag} monte de niveau !`)
				.setThumbnail(message.author.displayAvatarURL())
				.addField('Niveau ', currLvl + 1)
				.setImage('https://media.giphy.com/media/14e27FhfQA3Yivhi6e/giphy.gif');
			message.channel.send(lvlUp);
			xp[message.author.id].xp = 0;
		}

		fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
			if(err) console.log(err);
		});
	};

	if (!client.commands.has(command)) return;
	client.commands.get(command).execute(client, message, args);
});

client.login(process.env.BOT_TOKEN);

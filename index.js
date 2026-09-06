require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, Events } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.MessageContent
  ]
});

client.once(Events.ClientReady, (c) => {
  console.log(`🔥 Agni Bot is Online as ${c.user.tag}!`);
});

client.on('guildMemberAdd', async (member) => {
  const welcomeChannelId = process.env.WELCOME_CHANNEL_ID;
  const channel = member.guild.channels.cache.get(welcomeChannelId);

  if (!channel) {
    return console.log('❌ Welcome channel kandupidikka mudiyala!');
  }

  // Mass Agni SMP Welcome Embed
  const welcomeEmbed = new EmbedBuilder()
    .setColor('#FF3B00') // Pure Fire Flame Red/Orange
    .setAuthor({ 
      name: '🔥 AGNI SMP • OFFICIAL SERVER 🔥', 
      iconURL: member.guild.iconURL({ dynamic: true }) 
    })
    .setTitle('⚔️ ENTER THE INFERNO ⚔️')
    .setDescription(
      `> *“The fire within burns brighter than the fire around.”*\n\n` +
      `🔥 **Vanakkam ${member}!** You have stepped into the realm of fire.\n` +
      `Gear up, mine resources, and forge your survival empire!\n\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n` +
      `👑 **Member Rank:** \`#${member.guild.memberCount}\`\n` +
      `🎮 **Server Status:** \`Online 24/7\`\n` +
      `🔗 **Invite Link:** [Click to Share](https://discord.gg/mTgcNU2UY)\n` +
      `━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n` +
      `⚠️ *Check server rules before jumping into the world!*`
    )
    .setThumbnail(member.guild.iconURL({ dynamic: true, size: 512 }))
    .setImage('https://cdn.discordapp.com/attachments/1546018017421295716/1546018183197102141/Gemini_Generated_Image_92vp9h92vp9h92vp.png?ex=6a9e4122&is=6a9cefa2&hm=4acc9bc49ebdfd391ceebcf505c04e56319cca31535a7dd0bcc7b438d8cae7d6&') 
    .setFooter({ 
      text: 'Agni SMP | Rule the Realm With Fire 🔥', 
      iconURL: member.guild.iconURL({ dynamic: true }) 
    })
    .setTimestamp();

  channel.send({ 
    content: `🔥 **ALERT:** Oruthar kooda sernthutaaru! Let's welcome ${member} to **AGNI SMP**! ⚔️`, 
    embeds: [welcomeEmbed] 
  }).catch(err => console.error('Message anuppa mudiyala:', err));
});

client.login(process.env.DISCORD_TOKEN);
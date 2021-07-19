const { Client, MessageEmbed } = require('discord.js');
const client = new Client();
const button = require('discord-buttons');
button(client);
//Rowie//
client.eventRoles = {
  VK: "VK ROL ID GİRİNİZ", 
  DC: "DC ROL ID GİRİNİZ", 
  Gartic: "GARTİC ROL ID GİRİNİZ", 
//bunları degiştirebilirisniz botun lısansı bende sorun yok iyi kullanmalar//
};//Rowie//

client.botSettings = {
  botToken: "BOT TOKEN GİRİNİZ", //Rowie////Rowie//
  botVoice: "BOT SES KANAL ID GİRİNİZ" 
}
//Rowie//

client.on("ready", () => {//Rowie//
client.channels.cache.get(client.botSettings.botVoice).join(); 
console.log("Rowieyi Ayaz Aktif Etti İyi Kullanmalar"); 
client.user.setPresence({ activity: { name: "Rowie", type: "WATCHING" }, status: "idle" })//Rowie//
});
//Rowie//

//Rowie//
client.on("message", async message => {//Rowie//
let args = message.content.split(" ");
if(args[0] !== "kur") return; 
else 
{//Rowie//
  let button_1 = new button.MessageButton()
  .setStyle('red') 
  .setLabel('🎭 Doğruluk - Cesaret') 
  .setID('1')

  let button_2 = new button.MessageButton()//Rowie//
  .setStyle('red')  //Rowie//
  .setLabel('🧛‍♂️ Vampir - Köylü') 
  .setID('2')//Rowie//

  let button_3= new button.MessageButton()//Rowie//
  .setStyle('red')  //Rowie//
  .setLabel('🎮 Gartic')  
  .setID('3') 
//Rowie//

  await message.channel.send(`**Eğlence rollerini alt taraftaki butonlara basarak alabilirsin.**\n\n**__ROLLER__**\n\n\`>\` <@&${client.eventRoles.DC}>\n\`>\` <@&${client.eventRoles.VK}>\n\`>\`<@&${client.eventRoles.Gartic}> `, { buttons: [button_1, button_2,button_3] })

  client.on("clickButton", async (button) => {
//                    D  C
    if(button.id === "1") {//Rowie//
      if(button.clicker.member.roles.cache.get(client.eventRoles.DC)) {
        await button.clicker.member.roles.remove(client.eventRoles.DC)//Rowie//
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.DC}> rolü başarıyla hesabınızdan kaldırıldı`)//Rowie//
      } else {
        await button.clicker.member.roles.add(client.eventRoles.DC)//Rowie//
        await button.think(true)//Rowie//
        await button.reply.edit(`<@&${client.eventRoles.DC}> rolü başarıyla hesabınıza tanımlandı`)
      }//Rowie//
    }
//                     V  K//Rowie//
    if(button.id === "2") {
      if(button.clicker.member.roles.cache.get(client.eventRoles.VK)) {//Rowie//
        await button.clicker.member.roles.remove(client.eventRoles.VK)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.VK}> rolü başarıyla hesabınızdan kaldırıldı`)
      } else {//Rowie//
        await button.clicker.member.roles.add(client.eventRoles.VK)
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.VK}> rolü başarıyla hesabınıza tanımlandı`)
      }//Rowie//
    }//Rowie//
//Rowie//

    if(button.id === "3") {
      if(button.clicker.member.roles.cache.get(client.eventRoles.Gartic)) {
        await button.clicker.member.roles.remove(client.eventRoles.Gartic)//Rowie//
        await button.think(true)
        await button.reply.edit(`<@&${client.eventRoles.Gartic}> rolü başarıyla hesabınızdan kaldırıldı`)//Rowie//
      } else {
        await button.clicker.member.roles.add(client.eventRoles.Gartic)
        await button.think(true)//Rowie//
        await button.reply.edit(`<@&${client.eventRoles.Gartic}> rolü başarıyla hesabınıza tanımlandı`)//Rowie//
      }
    }
//Rowie//
  });
//Rowie//
//Rowie//
};//Rowie//


});

//Rowie//
client.login(client.botSettings.botToken)
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//
//Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001////Rowie#0001//

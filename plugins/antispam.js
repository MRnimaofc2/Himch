const Silver = require('../events');
const {MessageType} = require('@adiwajshing/baileys');

const Ln = ('This command for any emergency situation about any kind of WhatsApp SPAM in Group');
const code = ('*ð à¶à·à¶½à¶§ à¶ºà·à¶¸à·à¶±à· à·à·à¶à·à¶±à·à¶± !!!*\n *ð Don\'t go up !!!*\nA\nÉ´\ná´\nÉª\ns\ná´\ná´\ná´\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*[â]ââ¦ ðð¸ð»ðð´ð ð±ð¾ð â¦â[â]*')
const FINAL = "THIS IS AN ANTISAPM (anti lag),\nà¶¸à·à¶¸ à¶à·à¶­à¶º à¶à¶¶à¶à· à¶¯à·à¶»à¶à¶®à¶±à¶º à·à·à¶à·à¶»à·à¶­à· à¶´à¶«à·à·à·à¶© à¶±à·à·à· à·à·à¶»à·à·à¶¸ à·à¶½à¶à·à¶½à¶ºà·"
const TMUTE = "*â¾â¦ââââââââââââââââ¦â¾*\n    [â]ââ¦ ðð¸ð»ðð´ð ð±ð¾ð â¦â[â]\n*â¾â¦ââââââââââââââââ¦â¾*"
const MUT = ".mute 3h"
const SCXR = "â ðð¥ðð¢ ð ðð¡ð¡ðð§ ð§ðªð£ðð£ð..."



         Silver.addCommand({pattern: 'antispm', fromMe: true, deleteCommand: false, desc: Ln,}, (async (message, match) => {

  var msg = await message.reply('â ðð¥ðð¢ ð ðð¡ð¡ðð§ ð§ðªð£ðð£ð...');

  await message.client.sendMessage(
    message.jid,TMUTE, MessageType.text);

    await message.client.sendMessage(
      message.jid,MUT, MessageType.text);

      await message.client.sendMessage(
        message.jid,SCXR, MessageType.text);

        await message.client.sendMessage(
          message.jid,code, MessageType.text);

    await message.client.sendMessage(
        message.jid,code, MessageType.text);

        await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                               await message.client.sendMessage(
            message.jid,code, MessageType.text);

            await message.client.sendMessage(
                message.jid,code, MessageType.text);

                await message.client.sendMessage(
                  message.jid,code, MessageType.text);

                  await message.client.sendMessage(
                    message.jid,code, MessageType.text);

                    await message.client.sendMessage(
                      message.jid,code, MessageType.text);

                      await message.client.sendMessage(
                        message.jid,code, MessageType.text);
  
                          await message.client.sendMessage(
                             message.jid,FINAL, MessageType.text);
            let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += 'ââ @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,'*ââââAn emergencyââââ*\n\n' + mesaj+'\n\n``` ð Silver Bot Antispam ```', MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
   
                             

  }));

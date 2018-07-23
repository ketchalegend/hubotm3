var Conversation = require('hubot-conversation');
module.exports = function (robot) {

   var switchBoard = new Conversation(robot);

   robot.respond(/(hi|hey|hello|how are you)/i, function (msg) {
       var dialog = switchBoard.startDialog(msg);

       msg.reply('Hi am jessie, an automated assistant. Quick question: Are you a new m3connect employee?');

       dialog.addChoice(/(yes|yeah|yup|yep|y|ja)/i, function (msg2) {
           msg2.reply("I'm a basic chat bot built by EKE to help you get acquainted with your new job. Someday, I aspire to be the best. https://i.imgur.com/Zm4qfCf.gif\n Rather than send you a big list of new employee stuff to do, I'll periodically send you messages with reminders and tasks.\nBut first tell me a bit about yourself. Which category best describes you: designer or developer?");

           dialog.addChoice(/dev(eloper)?/i, function (msg3) {
             msg3.reply('Awesome -- a new developer! :neckbeard: Someone to build me some new features. ??\n Do you know about our weekly meetings? For more information type: meeting ??');
             dialog.addChoice(/(meeting)/i, function (msg4) {
               msg4.reply('Every Mondays from 14:00 - 14:30 in the Kinderzimmer, dont forget to save this information in your Calendar.\n I guess you will like to know which Wireless Network to use, for more information type: WLAN');
               dialog.addChoice(/(WLAN|wifi|wi-fi)/i, function (msg5) {
                 msg4.reply("SSID: m3connect_encrypted\n WPA-Schlüssel: L8nqfx!eV9N$\n what about your new Company email address? For more information type: email");
                 dialog.addChoice(/(email|mail)/i, function (msg6) {
                   msg6.reply('E-mail:___@m3connect.de \n User: first letter of your surname and complete name. Example max mustermann = m.mustermann \n Password: m3c...(PLEASE CHANGE) \n Now type: GIT');
                   dialog.addChoice(/(GIT|Git|Gitlab|gitlab)/i, function (msg7) {
                     msg7.reply('All our developers get full access to Gitlab, an SSH-Key is obligatory. Please visit this website: https://git.m3connect.de/m3-dev/ in order to login. You will have to use your Username and Password you got some minutes earlier. \n Once this is done, we will give a look at redmine. Please type: redmine');
                     dialog.addChoice(/(redmine|Redmine|REDMINE)/i, function (msg8) {
                       msg8.reply("Redmine is only available within our Scientific network, so make sure your connected to our VPN, once thats done, please visit: https://rm.m3connect.de/ \n To login you will have to use your usermane and password, you generated some moment earlier \n BTW, have you met my good friend, jessie? She can do some pretty neat stuff.\nTo see all her commands, send her a message with the word `help`.\nMy maintainer is working on a user guide for her! Until it's done, join the `hubothelp` channel and ask any questions there. The humans there are very polite. 👪");

                     });
                   });
                 });
               });
             });
           });
           dialog.addChoice(/design(er)/i, function (msg3) {
             msg3.reply('Nice -- a new designer! ?? Someone to keep our products user-friendly. ?? \n I guess you will like to know which Wireless Network to use, for more information type: WLAN');
              dialog.addChoice(/(WLAN|wifi|wi-fi)/i, function (msg4) {
                 msg4.reply("SSID: m3connect_encrypted\n WPA-Schlüssel: L8nqfx!eV9N$\n what about your new Company email address? For more information type: email");
                dialog.addChoice(/(email|mail)/i, function (msg5) {
                  msg5.reply("E-mail:___@m3connect.de \n User: first letter of your surname and complete name. Example max mustermann = m.mustermann \n Password: m3c...(PLEASE CHANGE) \n BTW, have you met my good friend, jessie? She can do some pretty neat stuff.\n To see all her commands, send her a message with the word `help`.\n My maintainer is working on a user guide for her! Until it's done, join the `hubothelp` channel and ask any questions there.The humans there are very polite. 👪");

                });
              });
           });

     });

       dialog.addChoice(/(no|nope|nah|negative)/i, function (msg2) {
           msg2.reply("Okay, cool. I have some automated messages that I send to new employees but I won't send them to you.\n BTW, have you met my good friend, jessie? She can do some pretty neat stuff.\n To see all her commands, send her a message with the word `help`.\n My maintainer is working on a user guide for her! Until it's done, join the `hubothelp` channel and ask any questions there. The humans there are very polite. 👪");

       });
 });

}

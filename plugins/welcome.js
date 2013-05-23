//
//	Kittens
//	welcome.js
//	
//	Modular plugin for Kittens for the use of 
//	welcoming new users to channels.
//	
//	Written by Luke Evers.
//

var util = require('util');
var fs = require('fs');

var commands = ['+setWelcomeMessage'];

module.exports = function(bot) {
	var users = require('../users.json');
	
	bot.addListener('message', function(from, to, text, message) {
		if (typeof users[from] == 'undefined') {
			isOP = false;
		} else isOP = (users[from].mode == '+o');
		if (message.args[1].indexOf('+setWelcomeMessage') == 0) {
			if (isOP) setWelcomeMessage(message.args[0], message.args[1].substring(19));
			else bot.say(message.args[0], from+': you do not have permission to do that!');
		}
	});
	
	// will do in a bit
	function setWelcomeMessage(channel, message) {
		bot.say(channel, message);
	}
	
	return commands;
}
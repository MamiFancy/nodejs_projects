console.log('start password manager');
var crypto = require('crypto-js');

var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
	.command('create', 'Create account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				type: 'string',
				description: 'Your account name goes here'
			},
			username: {
				demand: true,
				alias: 'u',
				type: 'string',
				description: 'Your username goes here'
			},
			password: {
				demand: true,
				alias: 'p',
				type: 'string',
				description: 'Your password goes here'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				type: 'string',
				description: 'Your masterpassword goes here'
			}
		}).help('help');
	})
	.command('get', 'Get Account', function(yargs){
		yargs.options({
			name: {
				demand: true,
				alias: 'n',
				type: 'string',
				description: 'Your account name goes here'
			},
			masterPassword: {
				demand: true,
				alias: 'm',
				type: 'string',
				description: 'Your masterpassword goes here'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0];

console.log(argv);

function getAccounts (masterPassword) {
	var encryptedAccounts = storage.getItemSync('accounts');
	var accounts = [];
	if(typeof encryptedAccounts !== 'undefined'){
		var bytes = crypto.AES.decrypt(encryptedAccounts, masterPassword);
	    accounts = JSON.parse(bytes.toString(crypto.enc.Utf8));
	}
    return accounts;
}

function saveAccounts (accounts, masterPassword) {
	var encryptedAccounts = crypto.AES.encrypt(JSON.stringify(accounts), masterPassword);
	console.log('encrypt:' + encryptedAccounts);
	storage.setItemSync('accounts', encryptedAccounts.toString());
	return accounts;
}


function createAccount(account, masterPassword){
	var accounts = getAccounts(masterPassword);
	accounts.push(account);
	saveAccounts(accounts, masterPassword);
	return account;
}

function getAccount(accountName, masterPassword) {
	var accounts = getAccounts(masterPassword);
	var matchedAccount; 

	accounts.forEach(function(account) {
		if(account.name === accountName) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}


if(command === 'create') {
	createAccount({
		name: argv.name,
		username: argv.username,
		password: argv.password
	}, argv.masterPassword);
} else if (command === 'get'){
	var account = getAccount(argv.name, argv.masterPassword);
	if(typeof account !== 'undefined'){
		console.log('Account found!');
		console.log(account);
	} else {
		console.log('Account is not found!');
	}
}
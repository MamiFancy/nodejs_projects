var accounts = [];

function createAccount(name, amt) {
	var account = {
		name: name,
		amount: amt
	}
	accounts.push(account);
	return account;
}

function getAccount(name) {
	var matchedAccount;
	accounts.forEach(function (account){
		if(account.name === name) {
			matchedAccount = account;
		}
	});

	return matchedAccount;
}

function withdraw(name, amt) {
	var account = getAccount(name);
	if(account){
		account.amount -= amt;
	}
}

function deposit(name, amt){
	var account = getAccount(name);
	if(account){
		account.amount += amt;
	}
}

function getBalance(name) {
	var account = getAccount(name);
	return account.amount;
}


var tonyAccount = createAccount('tony', '100');
var villyAccount = createAccount('villy', '200');

withdraw('tony', 20);
deposit('villy', 10);

console.log(getBalance('tony'));
console.log(getBalance('villy'));


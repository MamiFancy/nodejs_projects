
var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}

function getAccount(username) {
	var matchedAccount;
	accounts.forEach(function(account) {
		if(account.username === username) {
			matchedAccount = account;
		}
	});
	return matchedAccount;
}

function deposit (account, amount) {
	account.balance += amount;
}


function withdraw (account, amount) {
	account.balance -= amount; 
}


function getBalance (account) {
	return account.balance;
}


var tonyAccount = createAccount({
	username: 'tony',
	balance: 0
});

var villyAccount = createAccount({
	username: 'villy',
	balance: 1000
});

deposit(tonyAccount, 1000);
console.log(getBalance(tonyAccount));

withdraw(villyAccount, 200);
console.log(getBalance(villyAccount));

console.log(accounts);
console.log(villyAccount);
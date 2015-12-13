
var accounts = [];

function createAccount(account) {
	accounts.push(account);
	return account;
}

function getAccount(username) {
	var matchedAccount;

	for(var i = 0 ; i < accounts.length; i++) {
		if(accounts[i].username === username) {
			matchedAccount = accounts[i];
		}
	}
	return matchedAccount;
}

function deposit (account, amount) {
	if(typeof amount === 'number') {
		account.balance += amount;
	} else {
		console.log('the amount is not accepted.');
	}

}


function withdraw (account, amount) {
	if(typeof amount === 'number') {
		account.balance -= amount; 
	} else {
		console.log('the amount is not accepted.');
	}
}


function getBalance (account) {
	return account.balance;
}

function createBalanceGetter(account) {
	return function () {
		return account.balance;
	};
}

var tonyAccount = createAccount({
	username: 'tony',
	balance: 0
});

var villyAccount = createAccount({
	username: 'villy',
	balance: 1000
});

deposit(tonyAccount, 120);
withdraw(tonyAccount, 'my string');

var tony2 = getAccount('tony');
var getTony2Balance = createBalanceGetter(tony2);
console.log(getTony2Balance());

module.export = {

	createAccount: function (name, amt) {
		var account = {
			name: name,
			amount: amt
		}
		accounts.push(account);
		return account;
	},

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

};
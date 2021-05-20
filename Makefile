
BUILD = build

exec:
	truffle exec script/number.js
	truffle exec script/user.js
	
all:
	truffle compile
	truffle migrate

clean:
	@rm -rf $(BUILD)
	@clear

re: clean all



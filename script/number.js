
const Number = artifacts.require('Number');
var readline = require('readline');

module.exports = async function(callback) {
    
    const accounts = await web3.eth.getAccounts()
    let instance = await Number.deployed()
        
    let argv = process.argv.slice(4, process.argv.length)

    console.log(argv)

    

    accounts.forEach((account) => {

        instance.setNum(parseInt(Math.random() * (100000 - 1) + 1), {
            from: account
        }).then((e) => {
            console.log(e.tx)
        }).catch((e) => {
            console.log("Error")
        })


        instance.getNum(account).then((e) => {
            console.log(account, e.words[0])
        })
    })


    
    setTimeout(() => {

    
        var rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        });

        let command = false

        function prompt() {
            if(command == false)
                process.stdout.write("contract &> ")
        }

        prompt()

        rl.on('line', function(line){
            const args = line.split(" ")

            if(args[0] == "getNum")
            {
                command = true
                if(args[1] != undefined || args[1] != null)
                {
                    instance.getNum(args[1]).then((e) => {
                        command = false
                        console.log(e.words[0])
                        prompt()
                    })
                } else {
                    console.log("Missing address")
                }
            }

        })

        rl.on("line", function () {
            prompt()
        })
    }, 500)

    
    
}
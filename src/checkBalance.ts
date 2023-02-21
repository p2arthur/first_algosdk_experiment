import * as algosdk from "algosdk"


//Function to check address details

const checkBalance = (account: string) => {

    const token = {
        "x-api-key": ""
    }

    const port = ""
    const testServer = "https://node.algoexplorerapi.io/"

    let client = new algosdk.Algodv2(token["x-api-key"], testServer, port);




    (async () => {

        let accountInfo = (await client.accountInformation(account).do())
        console.log("Account details: ", JSON.stringify(accountInfo))

    })().catch((error) => { console.error(error) })

}

export default checkBalance
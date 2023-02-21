import * as algosdk from "algosdk"


const checkAsset = (asset: number) => {

    const token = {
        "x-api-key": ""
    }

    const port = ""
    const testServer = "https://node.algoexplorerapi.io/"

    let client = new algosdk.Algodv2(token["x-api-key"], testServer, port);




    (async () => {

        let accountInfo = (await client.getAssetByID(asset).do())
        console.log("Account details: ", JSON.stringify(accountInfo))

    })().catch((error) => { console.error(error) })

}

export default checkAsset;
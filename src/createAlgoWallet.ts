import * as algosdk from "algosdk";

const createAccount = (): void => {


    const account = algosdk.generateAccount();

    console.log("Wallet address is: ", account);

    const mnemonic: any = algosdk.secretKeyToMnemonic(account.sk)
    console.log("Account mnemonic: ", mnemonic)
}


export default createAccount;
const { ethers } = require("hardhat")

async function enterRaffle() {
    const raffle = await ethers.getContract("Raffle")
    const entranceFee = await ethers.getEntranceFee()
    const tx = await raffle.enterRaffle({ value: entranceFee + 1 })
    await tx.wait(1)
    console.log(tx.hash)
    console.log("Entered into Test Net")
}

enterRaffle()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })

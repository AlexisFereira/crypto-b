let direccion_contrato = "0x91701fDe64A901470a4f68561Cb8F9DD1ed5D91A"
// Referencia al contrato en el que se haya hecho el deploy
let c = await Cryptobillions.at(direccion_contrato)

// Obtenemos el listado de las billeteras
let cuenta = await web3.eth.getAccounts()

// Ejemplo de como hacer un call
let nivel = c.LAST_LEVEL()          // Llamado básico
let nivel = c.LAST_LEVEL.call()     // Llamado equivalente

// Ejemplo de como hacer un send: Registro de nuevo usuario.
let nonce = web3.eth.getTransactionCount(cuenta[1])
let tx = await c.registrationExt(cuenta[0], {from: cuenta[1], to: direccion_contrato, value: web3.utils.toWei("0.09", "ether"), data: web3.eth.abi.encodeFunctionSignature('whitdrawETH()')})

// Compra de un nuevo nivel (Matriz 1, Nivel 2, valor en ethers 0.09)
nonce = web3.eth.getTransactionCount(cuenta[1])
tx = await c.buyNewLevel(1,2, { from: cuenta[1], to: direccion_contrato, value: web3.utils.toWei("0.09", "ether") })

// Compra de un nuevo nivel (Matriz 1, Nivel 3, valor en ethers 0.18)
nonce = web3.eth.getTransactionCount(cuenta[1])
tx = await c.buyNewLevel(1,3, { from: cuenta[1], to: direccion_contrato, value: web3.utils.toWei("0.18", "ether") })

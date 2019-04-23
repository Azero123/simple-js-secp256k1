const secp256k1 = require('../src/index.js')

const g1 = secp256k1.multiply(secp256k1.g, 1)
if (g1.toString() !== '{"x":"79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798","y":"483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"}') {
  throw 'failure to multiply by 1'
}

const g65536 = secp256k1.multiply(secp256k1.g, Math.pow(2, 16))
if (g65536.toString() !== '{"x":"363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640","y":"4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"}') {
  throw 'failure to multiply binary number'
}

if (secp256k1.add(g1, g65536).toString() !== '{"x":"23314d19b5eff3c387a420b92c3c3135995d268ece08076a59de4e4dc5356876","y":"fd254f9a8cc854afecd1d2a7ba16599671ac00bfa98c500a74ed9c906769a871"}') {
  throw 'failure to add two ponts'
}

const g65537 = secp256k1.multiply(secp256k1.g, Math.pow(2, 16) + 1)
if (g65537.toString() !== '{"x":"23314d19b5eff3c387a420b92c3c3135995d268ece08076a59de4e4dc5356876","y":"fd254f9a8cc854afecd1d2a7ba16599671ac00bfa98c500a74ed9c906769a871"}') {
  throw 'failure to multiply non binary number'
}

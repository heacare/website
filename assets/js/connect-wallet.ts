
window.connectWallet = async function connectWallet() {
  const message = "We need globally accessbile preventative healthcare";

  if(window.ethereum) {
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0]);
    if(accounts[0] === null || accounts[0] === undefined) {
      return
    }
    const from = accounts[0];
    const msg = `0x${buffer.Buffer.from(message, 'utf8').toString('hex')}`;
    const sign = await ethereum.request({
      method: 'personal_sign',
      params: [msg, from, 'Example password'],
    });
  }
}

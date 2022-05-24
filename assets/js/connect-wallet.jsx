function ConnectWallet() {
  const message = "We need globally accessible preventative healthcare";

  let clicked = async () => {
    if(window.ethereum) {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts[0]);
        if(accounts[0] === null || accounts[0] === undefined) {
          return
        }
        const from = accounts[0];
        const msg = `0x${buffer.Buffer.from(message, 'utf8').toString('hex')}`;
        const sign = await ethereum.request({
          method: 'personal_sign',
          params: [msg, from],
        });
      } catch (error) {
        // Probably post some error message
        console.log(error);
        return;
      }

      console.log(sign);
    } else {
        window.location = "https://metamask.io/";
    }
  }

  return (
    <button class="px-4 py-2 rounded-lg bg-rose-500 border-2 border-transparent hover:bg-rose-600 outline-none ring-offset-2 focus-visible:ring-rose-600 focus-visible:ring-2 text-white no-underline font-semibold inline-block whitespace-nowrap my-1" onClick={() => clicked()}>
    { (window.ethereum) ? "Sign Open Letter" : "Intall Metamask to sign" } 
    </button>
  );
}

ReactDOM.render(React.createElement(ConnectWallet),
    document.getElementById("connect-wallet"));

/*
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
}*/

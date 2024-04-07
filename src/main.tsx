import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

// this manifest is used temporarily for development purposes
const manifestUrl =
  "https://markokhman.github.io/first_contract_front_end/tonconnect-manifest.json";
  
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <App />
  </TonConnectUIProvider>
);




//ton-test://connect/bsk5N7dvYUPGLXQwdR6h5i6Beti1j3UN87tKebN2gkI?endpoint=connect.tonhubapi.com

// Connected to wallet at address: EQBPBghJzsi_uW64m5CO4YzDFKg1U4TWdtJQQjD5ufB-5KNL
// Contract deployed at address EQCugNoffpjZT4qIdErTAIzGKesDr6hLq4yklMuWWjVqm8-R
// You can view it at https://testnet.tonscan.org/address/EQCugNoffpjZT4qIdErTAIzGKesDr6hLq4yklMuWWjVqm8-R
// Done in 24.82s.

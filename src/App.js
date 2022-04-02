import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./layouts/Layout";
import "react-image-lightbox/style.css";

// pages
import HomePage from "./pages/Home";
import MmLoginPage from "./pages/MmLogin";
import MarketPlacePage from "pages/Marketplace";
import MarketLayout from "./layouts/MarketLayout";
import WalletPage from "pages/Wallet";
import WalletLayout from "layouts/WalletLayout";
import { TestPage } from "pages/Test";
import MmLayout from "layouts/MmLayout";
import { useEffect, useState } from "react";
import { getCurrentWalletConnected } from "util/interact";

export default function App() {
  const [modalOpen, setModalOpen] = useState(true);
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");

  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);
    // setModalOpen(true);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);

          // once connected, open modal with create account form
          setModalOpen(true);
        } else {
          setWallet("");
          setModalOpen(false);
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a
            target="_blank"
            href={`https://metamask.io/download.html`}
            rel="noreferrer"
          >
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomePage />
            </Layout>
          }
        />
        <Route
          path="/login"
          element={
            <MmLayout>
              <MmLoginPage />
            </MmLayout>
          }
        />
        <Route
          path="/marketplace"
          element={
            walletAddress.length < 0 ? (
              <Navigate to="/login" />
            ) : (
              <MarketLayout>
                <MarketPlacePage />
              </MarketLayout>
            )
          }
        />
        <Route
          path="/wallet"
          element={
            <WalletLayout>
              <WalletPage />
            </WalletLayout>
          }
        />
      </Routes>
    </Router>
  );
}
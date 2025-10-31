import "./App.css";
import Header from "./components/Header";
import Card from "./components/smallerCards.jsx/Card";
import { CiUser, CiMoneyBill } from "react-icons/ci";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import TopCard from "./components/smallerCards.jsx/TopCard";
import Rp from "./components/RecentProjects/Rp";
import MarketingReport from "./components/MarketingReport";
import PaymentMethods from "./components/PaymentMethods";
import Delivery from "./components/deliveryAnalytics/Delivery";
import Earning from "./components/deliveryAnalytics/Earning";

function App() {
  return (
    <section className="App px-5 mx-auto space-y-4 mb-5">
      <Header />
      <TopCard />

      {/* 2nd Line Card */}
      <div className="cardWrapper flex md:flex-row flex-col gap-4">
        <Card
          icon={CiUser}
          iconBg="bg-pink-500"
          label={"Total followers"}
          bgColor="bg-pink-300"
        />
        <Card
          icon={CiMoneyBill}
          iconBg="bg-purple-500"
          label={"Total Income"}
          bgColor="bg-slate-200"
        />
        <Card
          icon={MdOutlineAccountBalanceWallet}
          iconBg="bg-green-400"
          label={"Current Balance"}
          iconSecond={IoSettingsOutline}
          bgColor="bg-green-100"
        />
      </div>

      <div className="flex flex-col md:flex-row  justify-between gap-5">
        <MarketingReport />
        <PaymentMethods />
      </div>

      <Rp />

      <div className="flex flex-col md:flex-row  justify-between gap-5">
        <Delivery />
        <Earning />
      </div>
    </section>
  );
}

export default App;

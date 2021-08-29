import FriendList from "components/Friends/Friend-list/Friend-list";
import ProfileCard from "components/SocialProfile/profileCard/ProfileCard";
import StatisticCard from "components/Statistic/StatisticCard/StatisticCard";
import TransactionHistory from "components/Transactions/TransactionHistory/TransactionHistory";
import statisticalData from "./statistical-data.json";
import friends from "./friends.json";
import user from "./user.json";
import transactions from "./transactions.json";
import "./App.css";

function App() {
  return (
    <>
      <FriendList items={friends} />
      <ProfileCard items={user} />
      <StatisticCard title="Upload stats" items={statisticalData} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

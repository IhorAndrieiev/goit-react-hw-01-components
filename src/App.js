import user from "./user.json";
//import ProfileList from "./components/ProfilleList";
import Profile from "./components/Profile";

import statisticalData from "./statistical-data.json";
import Statistics from "./components/Statistics";

import friends from "./friends.json";
import FriendList from "./components/FriendList";

import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";

import Section from "./components/Section";

export default function App() {
  return (
    <div>
      <Section title="Profile">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          //stats={user.stats}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </Section>

      <Section title="Statistic">
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Section>

      <Section title="Frends">
        <FriendList items={friends} />
      </Section>

      <Section title="Transaction">
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
}

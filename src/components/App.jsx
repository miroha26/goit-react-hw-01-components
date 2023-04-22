import user from 'userData/user.json';
import stats from 'userData/stats.json';
import friendsList from 'userData/friends.json';
import transactionHistory from 'userData/transactions.json';

import { Profile } from 'components/profile/Profile.jsx';
import { Statistics } from 'components/statistics/Statistics.jsx';
import { FriendsList } from 'components/friendList/FriendsList.jsx';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory.jsx';

import 'index.css';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={stats} />
      <FriendsList friends={friendsList} />
      <TransactionHistory items={transactionHistory} />
    </>
  );
};

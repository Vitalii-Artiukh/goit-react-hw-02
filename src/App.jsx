import Profile from './components/Profile/Profile';
import styles from './components/App.module.css';
import userData from './components/Profile/userData.json';
import friends from './components/FriendList/friends.json';
import transactions from './components/TransactionHistory/transactions.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>goit-react-hw-01</h1>

      <h2 className={styles.task}>Task 1 Profile</h2>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <h2 className={styles.task}>Task 2 FriendList</h2>
      <FriendList friends={friends} />

      <h2 className={styles.task}>Task 3 TransactionHistory</h2>
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;

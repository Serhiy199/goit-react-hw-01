import { Profile } from './Profile.jsx';
import userData from '../json/userData.json';
import { FriendList } from './FriendList.jsx';
import friends from '../json/friends.json';
import { TransactionHistory } from './TransactionHistory.jsx';
import transactions from '../json/transactions.json';

const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
        </>
    );
};

export default App;

import { FriendListItem } from './FriendListItem.jsx';
import { list, listElement } from '../styles/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <ul className={list}>
            {friends.map(friend => {
                return (
                    <li className={listElement} key={friend.id}>
                        <FriendListItem friend={friend} />
                    </li>
                );
            })}
        </ul>
    );
};

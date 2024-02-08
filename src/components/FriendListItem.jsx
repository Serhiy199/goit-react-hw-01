import { image, online, offline } from '../styles/FriendListItem.module.css';
import clsx from 'clsx';

export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <div>
            <img className={image} src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p className={clsx(isOnline ? online : offline)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </div>
    );
};

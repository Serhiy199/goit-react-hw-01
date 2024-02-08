import {
    container,
    conteinerUser,
    images,
    styleName,
    styleTag,
    listInform,
    listInformConteiner,
    listInformConteinerBorder,
    stats,
} from '../styles/Profile.module.css';
import clsx from 'clsx';

export const Profile = ({
    name,
    tag,
    location,
    image = 'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
    stats: { followers, views, likes },
}) => {
    return (
        <div className={container}>
            <div className={conteinerUser}>
                <img className={images} src={image} alt="User avatar" />
                <p className={styleName}>{name}</p>
                <p className={styleTag}>@{tag}</p>
                <p className={styleTag}>{location}</p>
            </div>

            <ul className={listInform}>
                <li className={listInformConteiner}>
                    <span>Followers</span>
                    <span className={stats}>{followers}</span>
                </li>
                <li
                    className={clsx(
                        listInformConteiner,
                        listInformConteinerBorder
                    )}
                >
                    <span>Views</span>
                    <span className={stats}>{views}</span>
                </li>
                <li className={listInformConteiner}>
                    <span>Likes</span>
                    <span className={stats}>{likes}</span>
                </li>
            </ul>
        </div>
    );
};

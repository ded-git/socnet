import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
<div calssName={s.content}>
    <div className={s.content__img}><img src="https://www.bakermckenzie.com/-/media/images/locations/ukraine/ukraine-headline-module1440x788.ashx" alt="" /></div>
    <div className={s.content__info}>
        <div>ava+description</div>
    <MyPosts />
    </div>
</div>
    );
}

export default Profile;
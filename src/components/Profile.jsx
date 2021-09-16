import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return(
<div calssName={s.content}>
    <div className={s.content__img}><img src="https://www.bakermckenzie.com/-/media/images/locations/ukraine/ukraine-headline-module1440x788.ashx" alt="" /></div>
    <div className={s.content__info}>
        <div>ava+description</div>
        <div>post 1</div>
        <div>post 2</div>
    </div>
</div>
    );
}

export default Profile;
import React from 'react';

import './Avatar.scss';

const Avatar = () => {
    return (
        <div className="avatar">
            <div className="avatar__image">
                <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-pop-art-eighties-patch-sticker-png-image_3779391.jpg" />
            </div>
            <div className="avatar__username">
                <span>Trúc Mây</span>
            </div>
        </div>
    );
};

export default Avatar;
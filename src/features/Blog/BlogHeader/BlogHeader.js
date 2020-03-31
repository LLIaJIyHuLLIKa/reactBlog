import React from 'react';
import './BlogHeader.scss';

function BlogHeader(props) {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__title">
                    <h1>Добро пожаловать на мой мини-блог!</h1>
                </div>
                <div className="header__search">
                    <button onClick={props.openModal}>Открыть поиск</button>
                </div>
            </div>
        </header>
    )
}

export default BlogHeader;

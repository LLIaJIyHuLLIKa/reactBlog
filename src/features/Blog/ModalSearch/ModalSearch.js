import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../slices/postsSlice';
import './ModalSearch.scss';

function ModalSearch(props) {
    const dispatch = useDispatch();

    const handleKeyPress = e => {
        if (e.key === 'Enter') {
            dispatch(setSearchQuery(e.target.value));
            props.openModal();
        }
    }

    return (
        <>
            <div className="modal__outer" onClick={props.openModal}></div>
            <div className="modal__inner">
                <div className="modal__content">
                    <label htmlFor="search">Поиск по тегам:</label><br /><br />
                    <input type="text" id="search" placeholder="Введите поисковый запрос..."
                        onKeyPress={e => handleKeyPress(e)}></input>
                </div>
            </div>
        </>
    )
}

export default ModalSearch;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, postsList } from '../slices/postsSlice';

function PostForm() {
    const [title, setTitle] = useState("");
    const [nick, setNickname] = useState("");
    const [tags, setTags] = useState("");
    const [text, setText] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const posts = useSelector(postsList);
    const dispatch = useDispatch();

    const getDate = () => {
        let nowDate = new Date();

        let day = nowDate.getDate();
        let month = nowDate.getMonth() + 1;
        let year = nowDate.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        const result = day + "." + month + "." + year;

        return result;
    };

    const getTime = () => {
        let nowDate = new Date();

        let hours = nowDate.getHours();
        let minutes = nowDate.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        const result = hours + ":" + minutes;

        return result;
    }

    const handleImageChange = e => {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => setImageUrl(reader.result);

        if (file) reader.readAsDataURL(file);
    }

    const handleSubmitForm = e => {
        e.preventDefault();

        let lastId = posts.length + 1;

        const postObject = {
            post_id: lastId,
            post_title: title,
            image_url: imageUrl,
            image_alt: title,
            nickname: nick,
            post_date: getDate(),
            post_time: getTime(),
            post_tags: tags,
            post_text: text
        };

        dispatch(createPost(postObject));

        setTitle("");
        setNickname("");
        setText("");
        setTags("");
    };

    return (
        <form className="blog-footer__form" onSubmit={handleSubmitForm}>
            <fieldset>
                <legend>Добавить пост</legend>
                <label htmlFor="title">Название поста:</label>
                <input type="text" id="title" value={title} placeholder="Введите название поста..." required
                    onChange={(e) => setTitle(e.target.value)}></input>
                <label htmlFor="nickname">Ваш ник:</label>
                <input type="text" id="nickname" value={nick} placeholder="Введите свой ник..." required
                    onChange={(e) => setNickname(e.target.value)}></input>
                <label htmlFor="text">Текст поста:</label>
                <textarea id="text" value={text} placeholder="Напишите то, о чём хотите рассказать..." required
                    onChange={(e) => setText(e.target.value)}></textarea>
                <label htmlFor="file">Выберите изображение: </label><br/><br/>
                <input type="file" id="file" accept="image/jpeg, image/png" required 
                    onChange={(e) => handleImageChange(e)}></input><br/><br/>
                <label htmlFor="tags">Введите теги:</label>
                <input type="text" id="tags" value={tags} placeholder="Введите теги через запятую..." required
                    onChange={(e) => setTags(e.target.value)}></input>
                <button type="submit">Добавить пост</button>
            </fieldset>
        </form>
    )
}

export default PostForm;

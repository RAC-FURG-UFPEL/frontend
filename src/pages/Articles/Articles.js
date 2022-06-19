import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Card from '../../components/Card/Card';
import styles from '../../styles/Articles/Articles.module.scss'

import Api from '../../api/Api';

function Articles() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Api.get('/posts/')
            .then((res) => {
                console.log(res)
                setPosts(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        <div className={styles.container}>

            <div>
                <Link to="/admin/nova-publicacao">Publicar</Link>
            </div>

            <div className={styles.wrapper}>
                {posts.map((post) => (
                    <Fragment key={post._id}>
                            <div className={styles.article}>
                                <Card
                                    display='false'
                                    key={post._id}
                                    img="https://cdn.create.vista.com/api/media/medium/179826100/stock-photo-background-made-pastel-colors-papers?token="
                                    title={post.title}
                                    author={post.author.firstName}
                                    description={post.description}
                                />
                                <div className={styles.body}>
                                    <h1>{post.title}</h1>
                                    <span>{post.author.firstName + ' ' + post.author.lastName}</span>
                                    <p>{post.description}</p>
                                    <p>{post.content}</p>
                                </div>
                            </div>
                    </Fragment>
                ))}
            </div>

        </div>

    )

}

export default Articles
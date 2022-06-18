import { useEffect, useState } from 'react'
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

            <div className={styles.wrapper}>
                {posts.map((post) => (
                    <>
                        <Link to='/'>
                            <div className={styles.article}>
                                <Card
                                    display='false'
                                    key={post._id}
                                    img="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
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
                        </Link>
                    </>
                ))}
            </div>

        </div>

    )

}

export default Articles
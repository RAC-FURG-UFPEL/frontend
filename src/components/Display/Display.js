import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Card from '../Card/Card';
import styles from '../../styles/Display/Display.module.scss'

import Api from '../../api/Api';
import axios from 'axios';

function Display() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Api.get('/posts/*/4')
            .then((res) => {
                console.log(res)
                setPosts(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        <div className={styles.Display}>

            <div className={styles.posts_container}>
                {posts.map((post) => (
                    <>
                        <Link to='/publicacoes/'>
                            <Card
                                key={post._id}
                                img="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                                title={post.title}
                                author={post.author.firstName}
                                description={post.description}
                            />
                        </Link>
                    </>
                ))}
            </div>

        </div>

    )

}

export default Display
import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CheckRole from '../../components/Private/CheckRole';
import { useParams } from 'react-router-dom';

import styles from '../../styles/Articles/Article.module.scss'
import buttons from '../../styles/Buttons/Buttons.module.scss'

import Api from '../../api/Api';

function Article() {

    const params = useParams()
    const url_title = params.url_title

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Api.get('/posts/title/' + url_title)
            .then((res) => {
                console.log(res)
                setPosts(res.data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        <div className={styles.container}>

            {posts.map((post) => (
                <Fragment key={post._id}>

                    <div className={styles.section}>
                        <h1>{post.title}</h1>
                        <div className={styles.description}>
                            {post.description}
                        </div>
                        <div className={styles.author}>
                            Escrito por: <Link to="/sobre-nos/equipe">{post.author.firstName}</Link>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <div className={styles.text}>
                            {post.content}
                        </div>
                    </div>

                </Fragment>
            ))}

        </div>

    )

}

export default Article
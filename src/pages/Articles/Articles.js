import { Fragment, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import CheckRole from '../../components/Private/CheckRole';

import Card from '../../components/Card/Card';
import styles from '../../styles/Articles/Articles.module.scss'
import buttons from '../../styles/Buttons/Buttons.module.scss'

import Api from '../../api/Api';
import Loader from '../../components/Loader/Loader';

function Articles() {

    const [removeLoader, setRemoveLoader] = useState(false)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setTimeout(() => {
            Api.get('/posts/')
                .then((res) => {
                    console.log(res)
                    setPosts(res.data.posts)
                    setRemoveLoader(true)
                })
                .catch((err) => console.log(err))
        }, 500)
    }, [])

    return (

        <div className={styles.container}>

            <CheckRole allowedRole="11">

            </CheckRole>

            <div className={styles.admin_buttons}>
                <Link to="/admin/nova-publicacao">
                    <button className={buttons.button_principal}>Nova publicação</button>
                </Link>
            </div>

            <div className={styles.wrapper}>
                {posts.length > 0 && posts.map((post) => (
                    <Fragment key={post._id}>
                        <div className={styles.article}>
                            <Card
                                display='false'
                                key={post._id}
                                img="https://cdn.create.vista.com/api/media/medium/179826100/stock-photo-background-made-pastel-colors-papers?token="
                                title={post.title}
                                url_title={post.url_title}
                                author={post.author.firstName}
                                description={post.description}
                            />
                            <div className={styles.body}>
                                <Link to={`/publicacoes/${post.url_title}`}>
                                    <div>
                                        <h1>{post.title}</h1>
                                        <p>{post.description}</p>
                                    </div>
                                </Link>
                                <Link to="/sobre-nos/equipe">
                                    <span>{post.author.firstName + ' ' + post.author.lastName}</span>
                                </Link>
                            </div>
                        </div>
                    </Fragment>
                ))}

                {!removeLoader && <Loader />}

            </div>

            <Outlet />
        </div>

    )

}

export default Articles
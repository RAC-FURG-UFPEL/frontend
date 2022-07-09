import { Fragment, useEffect, useState } from 'react';

import styles from '../../styles/Display/Display.module.scss';
import Card from '../Card/Card';

import Api from '../../api/Api';

function Display(props) {

    console.log(props.qtd)

    const [posts, setPosts] = useState([])

    useEffect(() => {
        Api.get('/posts/*/' + props.qtd)
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
                    <Fragment key={post._id}>
                            <Card
                                key={post._id}
                                img="https://cdn.create.vista.com/api/media/medium/179826100/stock-photo-background-made-pastel-colors-papers?token="
                                title={post.title}
                                url_title={post.url_title}
                                author={post.author.firstName}
                                description={post.description}
                            />
                    </Fragment>
                ))}
            </div>

        </div>

    )

}

export default Display
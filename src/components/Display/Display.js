import { useEffect, useState } from 'react'

import Card from '../Card/Card';
import Banner from '../Banner/Banner';
import styles from '../../styles/Display/Display.module.scss'

function Display() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/posts", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setPosts(data.posts)
            })
            .catch((err) => console.log(err))
    }, [])

    return (

        <div className={styles.Display}>

            <div className={styles.section_header}>
                <Banner />
            </div>

            <div className={styles.posts_container}>
                {posts.map((post) => (
                    <Card 
                    key={post._id}
                    img="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                    title={post.title}
                    author={post.author.firstName}
                    description={post.description}
                    />
                ))}
                <Card
                    img="https://tvseriescritic.files.wordpress.com/2016/10/stranger-things-bicycle-lights-children.jpg"
                    title="Alo Galera, Como Cês Tão?"
                    author="Yasmin Prado"
                    description="Eai, tudo bem? Clica nessa parada aí brother, vai <b>ser bom demais!</b> Se não for, paciência, tentamo."
                />
                <Card
                    img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_digital_keyart_vert_v3_lg.jpg"
                    title="Olha o Doutor Estranho kk"
                    author="Andrew Ribeiro"
                    description="Dr Estranho Feiticeira <b>Dr Estranho Dr Estranho</b> Feiticeira"
                />
                <Card
                    img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_digital_keyart_vert_v3_lg.jpg"
                    title="Olha o Doutor Estranho kk"
                    author="Andrew Ribeiro"
                    description="Dr Estranho Feiticeira <b>Dr Estranho Dr Estranho</b> Feiticeira"
                />
                <Card
                    img="https://terrigen-cdn-dev.marvel.com/content/prod/1x/stellarvortex_digital_keyart_vert_v3_lg.jpg"
                    title="Olha o Doutor Estranho kk"
                    author="Andrew Ribeiro"
                    description="Dr Estranho Feiticeira <b>Dr Estranho Dr Estranho</b> Feiticeira"
                />
            </div>

        </div>

    )

}

export default Display
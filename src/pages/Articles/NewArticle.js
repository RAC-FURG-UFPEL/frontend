import styles from '../../styles/Articles/NewArticle.module.scss'

import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

function NewArticle() {
    return (
        <>
            <Navbar />
            <div className={styles.newarticle_container}>
                <h1>Nova publicação</h1>
                <p>Insira os dados da nova publicação:</p>
                <p>form</p>
            </div>
            <Footer />
        </>
    )
}

export default NewArticle
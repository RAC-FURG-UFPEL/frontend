import styles from '../../styles/Articles/NewArticle.module.scss'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import Editor from '../../components/EditorJs/EditorJs'

function NewArticle() {

    return (
        <>
            <Navbar />
            <div className={styles.newarticle_container}>
                <h1>Nova publicação</h1>
                <p>Insira os dados da nova publicação:</p>
                
            </div>
            <Footer />
        </>
    )
}

export default NewArticle
import styles from '../../styles/Articles/NewArticle.module.scss'
import buttons from '../../styles/Buttons/Buttons.module.scss'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

function NewArticle() {

    const EditorComponent = () => <Editor />

    return (
        <>
            <Navbar />
            <div className={styles.newarticle_container}>
                <h1>Nova publicação</h1>

                <div className={styles.fields}>
                    <div className={styles.field}>
                        <input type="text" className={styles.form__input} id="title" placeholder="Título da Publicação" />
                        <label for="title" className={styles.form__label}>Título da Publicação</label>
                    </div>
                    <div className={styles.field}>
                        <input type="text" className={styles.form__input} id="description" placeholder="Descrição (até 256 caracteres)" />
                        <label for="title" className={styles.form__label}>Descrição</label>
                    </div>
                    <div className={styles.field_editor}>
                        <Editor className={styles.form__input} toolbarOnFocus placeholder="Comece a escrever a sua publicação clicando aqui!" />
                    </div>
                    <div className={styles.field_editor}>
                        <button className={buttons.button_border}>Visualizar Prévia</button>
                        <button className={buttons.button_border}>Salvar Rascunho</button>
                        <button className={buttons.button_principal}>Publicar</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default NewArticle
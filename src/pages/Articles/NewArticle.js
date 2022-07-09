import styles from '../../styles/Articles/NewArticle.module.scss'
import buttons from '../../styles/Buttons/Buttons.module.scss'

import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'

import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import JoditEditor from "jodit-react";

import useAuth from '../../hooks/useAuth'
import Api from '../../api/Api';
const POST_URL = '/posts'

function NewArticle() {

    const { auth } = useAuth()
    const navigate = useNavigate()

    const titleRef = useRef()
    const descriptionRef = useRef()
    const editorRef = useRef(null)
    const errRef = useRef()

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [content, setContent] = useState('')

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        console.log(title)
    }, [title])

    useEffect(() => {
        console.log(description)
    }, [description])

    const config = {
        readonly: false,
        colorPickerDefaultTab: 'color',
        minHeight: 400,
        iframe: true,
        iframeStyle: 'html{margin: 0px;}body{padding:10px;background:transparent;color:#000;position:relative;z-index:2;\
   user-select:auto;margin:0px;overflow:hidden;}body:after{content:"";clear:both;display:block}'
    }

    const handlePost = async (e) => {
        e.preventDefault()

        const url_title = title.toLowerCase().replace(/ /g, '-').normalize('NFD').replace(/[\u0300-\u036f]/g, "")
        
        /*
        console.log("SLUG: " + url_title)
        console.log("TITLE: " + title)
        console.log("DESC: " + description)
        console.log("CONTENT: " + content)
        console.log(auth)
        */
        try {

            const response = await Api.post(POST_URL,
                JSON.stringify(
                    {
                        title,
                        description,
                        content,
                        url_title
                    }),
                {
                    headers: {
                        Authorization: `Bearer ${auth.token}`,
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                }
            )
            console.log(response.data)
            console.log(JSON.stringify(response))
            setSuccess(true)
            navigate(`/publicacoes/${url_title}`, { replace: true })
        } catch (err) {
            console.log(err)
            setErrMsg('Post failed')
            errRef.current.focus()
        }
    }

    return (
        <>

            {success ? (
                <section>
                    <h1>Publicado com sucesso!</h1>
                    <p><Link to="/">Ir para a publicação</Link></p>
                </section>
            ) : (
                <>
                    <Navbar />
                    <div className={styles.newarticle_container}>
                        <h1>Nova publicação</h1>

                        <div className={styles.fields}>
                            <div className={styles.field}>
                                <input
                                    placeholder="Título da Publicação"
                                    className={styles.form__input}
                                    type="text"
                                    id="title"
                                    name="title"
                                    ref={titleRef}
                                    autoComplete="off"
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />

                                <label htmlFor="title" className={styles.form__label}>Título da Publicação</label>
                            </div>
                            <div className={styles.field}>
                                <input
                                    placeholder="Descrição (até 256 caracteres)"
                                    className={styles.form__input}
                                    type="text"
                                    id="description"
                                    name="description"
                                    ref={descriptionRef}
                                    autoComplete="off"
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />

                                <label htmlFor="title" className={styles.form__label}>Descrição</label>
                            </div>
                            <div className={styles.field_editor}>
                                <JoditEditor
                                    ref={editorRef}
                                    value={content}
                                    config={config}
                                    tabIndex={1} // tabIndex of textarea
                                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    onChange={newContent => { }}
                                />
                            </div>
                            <div className={styles.field}>
                                <p ref={errRef} className={errMsg ? `${styles.errmsg}` : `${styles.offscreen}`} aria-live="assertive">{errMsg}</p>
                            </div>
                            <div className={styles.field}>
                                <button className={buttons.button_border}>Visualizar Prévia</button>
                                <button className={buttons.button_border}>Salvar Rascunho</button>
                                <button
                                    onClick={handlePost}
                                    className={buttons.button_principal}
                                >
                                    Publicar
                                </button>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </>
            )}
        </>
    )
}

export default NewArticle
import React from 'react'
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Quote from '@editorjs/quote'
import Warning from '@editorjs/warning'
import Delimiter from '@editorjs/delimiter'
import NestedList from '@editorjs/nested-list'
import Checklist from '@editorjs/checklist'
import Image from '@editorjs/image'
import SimpleImage from '@editorjs/simple-image'
import Link from '@editorjs/link'
import Attaches from '@editorjs/attaches'
import Embed from '@editorjs/embed'
import Table from '@editorjs/table'

import Marker from '@editorjs/marker'
import Underline from '@editorjs/underline'

import configuration from './configuration'

const Editor = (props) => {

    const editor = new EditorJS({
        holder: 'editorjs',
        placeholder: 'Let`s write an awesome story!',
        tools: {
            header: {
                class: Header,
                inlineToolbar: ['link']
            },
            list: {
                class: List,
                inlineToolbar: true
            },
            image: {
                class: Image
            },
            simpleimage: {
                class: SimpleImage
            },
        },
        data: {},

        onReady: () => {
            console.log('EditorJS is ready to work!')
        }
    })

    return (
        <>
            <div className="container">
                <div id="editorjs"></div>
            </div>
        </>
    )
}
export default Editor
// components/TipTapEditor.tsx
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'
import { useEffect } from 'react'

interface Props {
    content: string
    onChange: (content: string) => void
}

function Editor({ content, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit],
        content: content || '',
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    useEffect(() => {
        if (editor && content) {
            editor.commands.setContent(content, false)
        }
    }, [content, editor])

    return (
        <div className="tipTapEditor border rounded p-2 bg-white">
            <Toolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

const TipTapEditor = ({ content, onChange }: Props) => {
    return <Editor content={content} onChange={onChange} />
}

export default TipTapEditor
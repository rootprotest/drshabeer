// src/components/TipTapEditor.tsx
'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Toolbar from './Toolbar'

interface Props {
    content: string
    onChange: (content: string) => void
}

export default function TipTapEditor({ content, onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit],
        content,
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        },
    })

    return (
        <div className="tipTapEditor border rounded p-2 bg-white">
            <Toolbar editor={editor} />
            <div className="form-control p-0 border-0 min-h-[200px]">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}
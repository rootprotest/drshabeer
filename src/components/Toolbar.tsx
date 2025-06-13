// src/components/Toolbar.tsx
'use client'

import { FaBold, FaItalic, FaStrikethrough, FaListUl, FaListOl } from 'react-icons/fa'
import { RxFontBold, RxFontItalic, RxStrikethrough, RxCode, RxChevronDown } from 'react-icons/rx'
import { BsTextCenter, BsTextLeft, BsTextRight } from 'react-icons/bs'
import React from 'react'

interface Props {
    editor: any
}

export default function Toolbar({ editor }: Props) {
    if (!editor) return null

    return (
        <div className="toolbar mb-2 flex flex-wrap gap-1 border-b pb-2">
            <button
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bold') ? 'bg-gray-200' : ''
                    }`}
                title="Bold"
            >
                <RxFontBold size={18} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('italic') ? 'bg-gray-200' : ''
                    }`}
                title="Italic"
            >
                <RxFontItalic size={18} />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('strike') ? 'bg-gray-200' : ''
                    }`}
                title="Strike Through"
            >
                <RxStrikethrough size={18} />
            </button>

            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('paragraph') ? 'bg-gray-200' : ''
                    }`}
                title="Paragraph"
            >
                <span className="text-sm">P</span>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : ''
                    }`}
                title="Heading 1"
            >
                <span className="text-sm">H1</span>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : ''
                    }`}
                title="Heading 2"
            >
                <span className="text-sm">H2</span>
            </button>

            <button
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('bulletList') ? 'bg-gray-200' : ''
                    }`}
                title="Bullet List"
            >
                <FaListUl />
            </button>

            <button
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={`p-2 rounded hover:bg-gray-200 ${editor.isActive('orderedList') ? 'bg-gray-200' : ''
                    }`}
                title="Ordered List"
            >
                <FaListOl />
            </button>

            <button
                onClick={() => editor.chain().focus().setHorizontalRule().run()}
                className="p-2 rounded hover:bg-gray-200"
                title="Separator"
            >
                <span>—</span>
            </button>

            <button
                onClick={() => editor.chain().focus().undo().run()}
                className="p-2 rounded hover:bg-gray-200"
                title="Undo"
            >
                <span>↩</span>
            </button>

            <button
                onClick={() => editor.chain().focus().redo().run()}
                className="p-2 rounded hover:bg-gray-200"
                title="Redo"
            >
                <span>↪</span>
            </button>
        </div>
    )
}
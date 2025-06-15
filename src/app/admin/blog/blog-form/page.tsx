// app/admin/blog/blog-form/page.tsx
import React, { Suspense } from 'react'
import AddEditBlogForm from '@/components/Admin/AddEditBlogForm'

export default function BlogFormPage() {
    return (
        <Suspense fallback={<div>Loading form...</div>}>
            <AddEditBlogForm />
        </Suspense>
    )
}

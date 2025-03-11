import React from 'react'
import Link from 'next/link'
const AdminLayout = ({children}) => {
  return (
    <div>
      <nav>
        <Link href="/admin">Dashboard</Link>
        <Link href="/admin/users">Users</Link>
        <Link href="/admin/products">Products</Link>
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default AdminLayout

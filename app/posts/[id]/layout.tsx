import Link from "next/link"
import styles from './layout.module.css'

const fetchPost = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function PostLayout({
  children,
  params
}) {
  const { id } = params
  const post = await fetchPost(id)
  return (
    <article className={styles.postDetailContainer}>
      <h1 className={styles.postTitle}>{post.title}</h1>
      <p className={styles.postBody}>{post.body}</p>
      <Link className={styles.button} href={`/posts/${id}/comments`}>Coments</Link>
      {children}
    </article>
  )
}

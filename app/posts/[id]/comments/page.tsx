import Image from "next/image"
import styles from './page.module.css'

const fetchComents = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export default async function Comments({ params }) {
  const { id } = params
  const comments = await fetchComents(id)
  return (
    <ul className={styles.commentContainer}>
      {comments.map(comment => (
        <li className={styles.commentContent} key={comment.id}>
          <Image alt={comment.id} src={`https://api.dicebear.com/avatar.svg`} width='25' height='25' />
          <div className={styles.commentAuthor}>{comment.email}</div>
          <div className={styles.commentContent}>
            <p>{comment.name}</p>
            <p>{comment.body}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
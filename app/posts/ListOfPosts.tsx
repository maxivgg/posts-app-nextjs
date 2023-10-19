import Link from "next/link"
import styles from './ListOfPosts.module.css';

const fetchPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  })
    .then(res => res.json())
}

export async function ListOfPosts() {
  const posts = await fetchPosts()

  return <div className={styles.post_list_container}>
    {posts.map(post => (
      <article className={styles.post} key={post.id}>
        <Link href={`/posts/${post.id}`}>
          <h2 className={styles.postTitle}>{post.title}</h2>
        </Link>
        <p className={styles.postBody}>{post.body}</p>
      </article>
    ))}
  </div >
}
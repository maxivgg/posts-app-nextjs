export default function PostsLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <h1 className="text-5xl font-bold text-gray-900 leading-[1.4]">Posts</h1>
      {children}
    </section>
  )
}
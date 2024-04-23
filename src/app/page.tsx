
import Link from "next/link";
import { db } from "~/server/db";

const mockUrls: string[] = [
  'https://utfs.io/f/ce171a1f-f9a2-4527-a12b-98b158d14c95-gx0l0w.jpg',
  'https://utfs.io/f/d5dd6a1c-a3e5-44c8-b590-8bed615fde9f-h2f60z.jpg',
  'https://utfs.io/f/62f7afe8-49f1-4b2b-8211-090049168f46-h2f6sh.jpg',
  'https://utfs.io/f/ecd696a7-a6af-4681-8d80-e52f371e7639-x8sigy.jpg',
]

export const dynamic ="force-dynamic"

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url 
}))

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts, 'posts')

  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
      {[...mockImages, ...mockImages, ...mockImages].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="" />
        </div>
      ))}
     </div>
    </main>
  );
}

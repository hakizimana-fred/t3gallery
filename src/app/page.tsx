
import Link from "next/link";
import { db } from "~/server/db";


export const dynamic ="force-dynamic"

export default async function HomePage() {
  const posts = await db.query.posts.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  return (
    <main className="">
     <div className="flex flex-wrap gap-4">
      {[...posts, ...posts, ...posts].map((post, idx) => (
        <div key={idx} className="flex w-48 flex-col">
          <img src={post.url} alt="" />
        </div>
      ))}
     </div>
    </main>
  );
}

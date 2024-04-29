
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";


export const dynamic ="force-dynamic"

async function Images() {
const posts = await db.query.posts.findMany({
    orderBy: (model, {desc}) => desc(model.id)
  })

  return (

     <div className="flex flex-wrap gap-4">
      {posts.map((post, idx) => (
        <div key={idx} className="flex w-48 flex-col">
          <img src={post.url} alt="" />
        </div>
      ))}
     </div>

  )
}


export default async function HomePage() {
    return (
    <main className="">
      <SignedOut>
        <div className="h-full text-center w-full text-2xl">Please sign in to continue</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}

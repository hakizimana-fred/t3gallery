
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";
import { getImages } from "~/server/queries";


export const dynamic ="force-dynamic"

async function Images() {

  const posts = await getImages()
  return (

     <div className="flex flex-wrap justify-center gap-4">
      {posts.map((post, idx) => (
        <div key={idx} className="flex w-48 h-48 flex-col">
          <Image style={{objectFit: 'contain'}} src={post.url} alt={post.name} width={192} height={192} />
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

// app/team/[slug]/page.jsx

import { getMemberBySlug } from "../../_components/DataManager";
import { MemberHeader } from "../../_components/MemberHeader";
import ArticleData from "../../_components/ArticleData";
export default async function TeamPage({ params }) {
    const member = getMemberBySlug(params.slug);
  
    if (!member) {
      return notFound();
    }
    
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <article className="container mx-auto max-w-4xl mt-40 px-4 py-8 text-gray-800">
                <MemberHeader article={member} />
               
                <ArticleData article={member.content} />
            </article>
        </main>
    );
}
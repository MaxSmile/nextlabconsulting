import ArticleData from "@/app/_components/ArticleData";
import { getMemberBySlug } from "@/app/_components/DataManager";

export default async function TeamPage({ params }) {
    const member = getMemberBySlug(params.slug);
  
    if (!member) {
      return notFound();
    }
    
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <article className="container mx-auto max-w-4xl mt-40 px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">{member.title}</h1>
                <p className="mb-4">{member.description}</p>
                <img src={member.picture} alt={member.title} className="w-full h-auto rounded-lg" />
                <ArticleData article={member.content} />
            </article>
        </main>
    );
}
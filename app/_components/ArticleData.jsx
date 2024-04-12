
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
export default function ArticleData({ article }) {

    return (
        <div className="max-w-3xl mx-auto">

            <Markdown remarkPlugins={[remarkGfm]}>{article}</Markdown>

        </div>
    );

}
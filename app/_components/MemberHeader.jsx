import Image from 'next/image';

import BackHistoryButton from './BackHistoryButton';

export function MemberHeader({ article }) {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="my-12 md:flex">
        {/* Image on the left */}
        <div className="flex-shrink-0 mb-8 md:mb-0" data-aos="fade-right" data-aos-duration="1000">
          <Image
            width={0}
            height={0}
            loading='lazy'
            src={article.picture}
            alt={article.title}
            sizes="100vw"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            style={{ width: '320px', minWidth: '260px', height: 'auto' }}
            className="mx-auto rounded-lg object-cover shadow-lg"
          />
        </div>
        
        {/* Content on the right */}
        <div className="flex-grow text-left md:ml-8">
          <p className="text-secondary py-4">
            <BackHistoryButton />
          </p>
          <h1 className="text-secondary mb-4 text-3xl">{article.title}</h1>
          <p className="text-secondary py-4 text-sm">
            Date:&nbsp;{article.date} 
            {article.time && <> | Time to read: {article.time}</>}
          </p>
        </div>
      </div>
    </section>
  );
}

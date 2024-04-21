import Image from 'next/image';

import BackHistoryButton from './BackHistoryButton';

export function MemberHeader({ article }) {
  return (
    <section className="max-w-3xl mx-auto">
      <div className="mb-12 mt-0 md:flex">
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

          <h1 className="text-secondary mb-4 text-3xl">{article.title}</h1>
          
          <p className="text-secondary">{article.description}</p>
          <h2 className='text-2xl mt-4'>Areas of Expertise</h2>
          <ul className="list-disc pl-5 space-y-2 text-secondary">
   
              {article.expertise.map((area, index) => (
                <li key={index} className=" ml-0" >{area}</li>
              ))}
  
            </ul>
        </div>
      </div>
      <h2 className="text-2xl my-4 ">Biography</h2>
    </section>
  );
}

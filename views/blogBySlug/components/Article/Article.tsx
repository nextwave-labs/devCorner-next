import styles from './Article.module.css'
import { Chip } from '@/common/components/Chip'
import { BlogPost } from '@/common/utils/types/blogPost'
import { RenderMD } from '../RenderMD'
import { Author } from '../Author'

export const Article: React.FC<Omit<BlogPost, 'meta'>> = ({
  title,
  author,
  shortDescription,
  img,
  date,
  tags,
  blogMd,
}) => {
  const tagChips = tags.map((tag) => (
    <Chip proportion={'md'} variant='primary' key={tag.id} bold={true}>
      {tag.name}
    </Chip>
  ))

  return (
    <article className={styles[`article-box`]}>
      <div className={styles['section_container']}>
        <header className={styles['article__intro']}>
          <div className={styles[`article__intro--creative`]}>
            <address className={styles[``]}>
              <a
                href={author.webAddress}
                target='_blank'
                rel='noopener noreferrer'
              >
                {author.name}
              </a>
            </address>{' '}
            <span>•</span>{' '}
            <time className={styles[``]} dateTime={date}>
              {date}
            </time>
          </div>
          <h1 className={styles[`article__intro--title`]}>{title}</h1>
          <p className={styles[`article__intro--desc`]}>{shortDescription}</p>
          <div className={styles[`article__intro--tags`]}>{tagChips}</div>
          <div className={styles[`article__intro--img`]}>
            <picture className={styles[``]}>
              <source
                srcSet={img.src.lg}
                media='(min-width: 1020px)'
                width='920'
                height='520'
              />
              <source
                srcSet={img.src.md}
                media='(min-width: 720px)'
                width='690'
                height='370'
              />
              <source
                srcSet={img.src.sm}
                media='(min-width:520px)'
                width='490'
                height='270'
              />
              <img
                loading={'eager'}
                src={img.src.xs}
                alt={img.alt}
                width='320'
                height='180'
              />
            </picture>
          </div>
        </header>
      </div>
      <div className={`${styles['section_container']} ${styles['bg-light']}`}>
        <div className={styles['article__intro']}>
          <RenderMD MD={blogMd} />
        </div>
      </div>

      <div className={`${styles['section_container']} ${styles['bg-light']}`}>
        <footer className={styles['article__footer']}>
          <hr />
          <Author
            name={author.name}
            role={author.role}
            avatar={author.avatar}
            github={author.githubUrl}
            linkedIn={author.linkedinUrl}
            webAddress={author.webAddress}
          />
        </footer>
      </div>
    </article>
  )
}

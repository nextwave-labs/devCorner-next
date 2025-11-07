import styles from './RenderMD.module.css'
import { CodeBlockProps, RenderMDProps } from './RenderMD.utils'

import Markdown from 'markdown-to-jsx'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'

// Import only the languages you need
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import markdown from 'react-syntax-highlighter/dist/esm/languages/prism/markdown'
import yaml from 'react-syntax-highlighter/dist/esm/languages/prism/yaml'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import csharp from 'react-syntax-highlighter/dist/esm/languages/prism/csharp'
import sql from 'react-syntax-highlighter/dist/esm/languages/prism/sql'

// Register only the languages you need
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('typescript', typescript)
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('markdown', markdown)
SyntaxHighlighter.registerLanguage('yaml', yaml)
SyntaxHighlighter.registerLanguage('python', python)
SyntaxHighlighter.registerLanguage('csharp', csharp)
SyntaxHighlighter.registerLanguage('sql', sql)

const CodeBlock: React.FC<CodeBlockProps> = ({ children, className }) => {
  const language = className ? className.replace(/lang-/, '') : 'javascript'
  const code = children
  const codeIsInline = !code.includes('\n')
  return (
    <SyntaxHighlighter
      wrapLongLines={true}
      language={language}
      customStyle={
        codeIsInline ?
          {
            padding: '0.2rem 0.3rem',
            borderRadius: '0.3rem',
            color: 'var(--color-gray-900)',
            fontFamily:
              'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
            textAlign: 'left',
            whiteSpace: 'pre',
            wordSpacing: 'normal',
            wordBreak: 'normal',
            overflowWrap: 'normal',
            lineHeight: '1.5',
            fontSize: '1em',
            tabSize: '4',
            hyphens: 'none',
            overflow: 'auto',
            background: 'var(--color-gray-200)',
          }
        : {
            background: 'var(--color-dark-blue)',
            color: 'var(--color-dark-green)',
            padding: '0.5rem 1rem',
            borderRadius: '0.3rem',
          }
      }
      PreTag={codeIsInline ? 'span' : 'pre'}
    >
      {code}
    </SyntaxHighlighter>
  )
}

const ScrollableTable: React.FC<CodeBlockProps> = ({ children }) => {
  return (
    <div className={styles['scrollable-item']}>
      <table>{children}</table>
    </div>
  )
}

export const RenderMD: React.FC<RenderMDProps> = ({ MD }) => {
  return (
    <div className={styles[`render-md-box`]}>
      <Markdown
        options={{
          overrides: {
            code: {
              component: CodeBlock,
            },
            table: {
              component: ScrollableTable,
            },
            pre: {
              component: 'div',
            },
            img: {
              props: {
                loading: 'lazy',
              },
            },
            a: {
              props: {
                target: '_blank',
                rel: 'noopener noreferrer',
              },
            },
          },
        }}
      >
        {MD}
      </Markdown>
    </div>
  )
}

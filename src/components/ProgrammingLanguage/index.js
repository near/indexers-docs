import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import RustLang from '@site/static/img/rust.png';
import JSLang from '@site/static/img/js.png';
import PyLang from '@site/static/img/python.png';

const LANG_MAP = {
  'rust-lang': 'Rust',
  'rust': 'Rust',
  'javascript': 'JavaScript',
  'js': 'JavaScript',
  'ts': 'JavaScript',
  'typescript': 'JavaScript',
  'python': 'Python',
}

function LangImg({ lang }) {
  switch (lang) {
    case "rust-lang":
    case "rust":
      return <img src={RustLang} />
    case "javascript":
    case "js":
      return <img src={JSLang} />
    case "python":
      return <img src={PyLang} />
    default:
      return <></>
  }
}

export default function ProgrammingLanguage({ lang, small }) {
  return (
    <div className={small ? styles.containerSmall : styles.container}>
      <div className={small ? styles.logoSmall : styles.logo}>
        <LangImg lang={lang} />
      </div>
      {small ?
        <div className={styles.disclaimer}>
          {LANG_MAP[lang]}
        </div>
        :
        <div className={styles.disclaimer}>
          The article is written for {LANG_MAP[lang]} programming language. Concepts, advices, and examples might differ from other programming languages
        </div>
      }
    </div>
  )
}

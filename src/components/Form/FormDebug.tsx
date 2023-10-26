import hljs from 'highlight.js/lib/core'
import json from 'highlight.js/lib/languages/json'
import 'highlight.js/styles/github.css'
import { useFormContext } from 'react-hook-form'

// Then register the languages you need
hljs.registerLanguage('json', json)

export const FormDebug = (): JSX.Element => {
  const { watch } = useFormContext()
  const values = watch()

  return (
    <div
      className="sbar prose-md max-h-32 w-full max-w-full overflow-y-auto break-all rounded-md border border-grey-30 bg-grey-10 px-4 py-2 font-[monospace]"
      dangerouslySetInnerHTML={{
        __html: hljs.highlight(JSON.stringify(values, null, 4), {
          language: 'json',
        }).value,
      }}
    />
  )
}

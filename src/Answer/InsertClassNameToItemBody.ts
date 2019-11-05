import { string } from "prop-types";

/*export function InsertClassName(body: string): string {
  return body.split('<').reduce<string>((p, e) => {
    if (e.substr(0, 4) === 'code')
      p += `<code class='itembodycode'${e.substr(4)}`
    else if (e.substr(0, 3) === 'pre')
      p += `<pre class='itembodypre'${e.substr(3)}`
    else if (e.substr(0, 1) === 'p')
      p += `<p class='itembodyp'${e.substr(1)}`
    else if (e)
      p += `<${e}`
    return p;
  }, '')
}*/

export function InsertClassName(body: string): string {
  const sub: { [index: string]: string } = {
    '<code>': "<code class='itembodycode'>",
    '<pre>': "<pre class='itembodypre'>",
    '<p>': "<p class='itembodyp'>",
    /*'&gt;': '>',
    '&lt;': '<',
    '&amp;': '&',
    '&quot;': '"',
    '&apos;': "'",*/
  }
  return body.replace(/<\w+>/g, m => {
    return sub[m] ? sub[m] : m;
  })
}
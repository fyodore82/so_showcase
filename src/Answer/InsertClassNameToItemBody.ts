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
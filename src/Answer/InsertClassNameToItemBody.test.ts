import 'jest'
import { InsertClassName } from './InsertClassNameToItemBody'

const testString = "<p>Consider  the following example</p>\n\n<pre><code>type A = { [prop: string]: any };\ntype B = { [prop: string]: any; prop1: string };\n</code></pre>\n\n<p>Does type <code>"
const resultString = "<p class='itembodyp'>Consider  the following example</p>\n\n<pre class='itembodypre'><code class='itembodycode'>type A = { [prop: string]: any };\ntype B = { [prop: string]: any; prop1: string };\n</code></pre>\n\n<p class='itembodyp'>Does type <code class='itembodycode'>"
test('InsertClassNameToItemBody', () => {
  expect(InsertClassName(testString)).toBe(resultString)
});
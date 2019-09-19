import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { Schema } from 'prosemirror-model';
import { builders } from './build';

export { builders } from './build';

const testSchema = new Schema({
   nodes: addListNodes(schema.spec.nodes as any, 'paragraph block*', 'block'),
   marks: schema.spec.marks
});

export const nodes = builders(testSchema, {
   p: { nodeType: 'paragraph' },
   pre: { nodeType: 'code_block' },
   h1: { nodeType: 'heading', level: 1 },
   h2: { nodeType: 'heading', level: 2 },
   h3: { nodeType: 'heading', level: 3 },
   li: { nodeType: 'list_item' },
   ul: { nodeType: 'bullet_list' },
   ol: { nodeType: 'ordered_list' },
   br: { nodeType: 'hard_break' },
   img: { nodeType: 'image', src: 'img.png' },
   hr: { nodeType: 'horizontal_rule' },
   a: { markType: 'link', href: 'foo' }
});

export const eq = (a: any, b: any) => a.eq(b);
export const p = nodes['p'];
export const pre = nodes['pre'];
export const h1 = nodes['h1'];
export const h2 = nodes['h2'];
export const h3 = nodes['h3'];
export const li = nodes['li'];
export const ul = nodes['ul'];
export const ol = nodes['ol'];
export const br = nodes['br'];
export const img = nodes['img'];
export const hr = nodes['hr'];
export const a = nodes['a'];
export const doc = nodes['doc'];
export const em = nodes['em'];
export const blockquote = nodes['blockquote'];

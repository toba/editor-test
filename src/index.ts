import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { Schema } from 'prosemirror-model';
import { builders } from './build';

export { builders } from './build';

const testSchema = new Schema({
   nodes: addListNodes(schema.spec.nodes as any, 'paragraph block*', 'block'),
   marks: schema.spec.marks
});

export const out = builders(testSchema, {
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
export const p = out['p'];
export const pre = out['pre'];
export const h1 = out['h1'];
export const h2 = out['h2'];
export const h3 = out['h3'];
export const li = out['li'];
export const ul = out['ul'];
export const ol = out['ol'];
export const br = out['br'];
export const img = out['img'];
export const hr = out['hr'];
export const a = out['a'];

import {toString} from 'mdast-util-to-string';
import {valueToEstree} from 'estree-util-value-to-estree';

// Emits schema.org FAQPage JSON-LD for the <details>/<summary> pairs under a "## FAQ" heading
const FAQ_HEADING = /^(faqs?|frequently asked questions)$/i;

const isDetails = (node) => (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'details';

const isSummary = (node) => (node.type === 'mdxJsxFlowElement' || node.type === 'mdxJsxTextElement') && node.name === 'summary';

const normalize = (text) => text.replace(/\s+/g, ' ').trim();

const toQuestion = (details) => {
  const summary = details.children.find(isSummary);
  if (!summary) return null;

  const question = normalize(toString(summary));
  const answer = normalize(details.children.filter((child) => !isSummary(child)).map((child) => toString(child)).join(' '));
  if (!question || !answer) return null;

  return {'@type': 'Question', name: question, acceptedAnswer: {'@type': 'Answer', text: answer}};
};

const FAQ_PAGE_TITLE = /\b(faqs?|frequently asked questions)\b/i;

const collectFaqDetails = (tree) => {
  const found = [];
  let inFaq = false;
  let faqPage = false;

  for (const node of tree.children) {
    if (node.type === 'heading' && node.depth === 1) {
      faqPage = FAQ_PAGE_TITLE.test(normalize(toString(node)));
      inFaq = faqPage;
      continue;
    }
    if (node.type === 'heading' && node.depth === 2 && !faqPage) {
      inFaq = FAQ_HEADING.test(normalize(toString(node)));
      continue;
    }
    if (inFaq && isDetails(node)) found.push(node);
  }

  return found;
};

const jsonLdHead = (json) => ({
  type: 'mdxJsxFlowElement',
  name: 'Head',
  attributes: [],
  children: [
    {
      type: 'mdxJsxFlowElement',
      name: 'script',
      attributes: [{type: 'mdxJsxAttribute', name: 'type', value: 'application/ld+json'}],
      children: [
        {
          type: 'mdxFlowExpression',
          value: JSON.stringify(json),
          data: {
            estree: {
              type: 'Program',
              sourceType: 'module',
              body: [{type: 'ExpressionStatement', expression: valueToEstree(json)}],
            },
          },
        },
      ],
    },
  ],
});

export default function remarkFaqSchema() {
  return (tree) => {
    const mainEntity = collectFaqDetails(tree).map(toQuestion).filter(Boolean);
    if (mainEntity.length === 0) return;

    tree.children.push(jsonLdHead(JSON.stringify({'@context': 'https://schema.org', '@type': 'FAQPage', mainEntity})));
  };
}

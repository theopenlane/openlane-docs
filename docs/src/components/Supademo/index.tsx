type Props = {
  // children is the raw embed snippet copied verbatim from Supademo's Share > Embed
  // export, passed as a template literal string (`<Supademo>{`...`}</Supademo>`) rather
  // than literal JSX children. MDX parses tag content as JSX, and the vendor snippet uses
  // string style attributes and bare boolean attributes that aren't valid JSX; wrapping it
  // in a template literal makes MDX treat it as a JS string expression instead of markup,
  // so it can be pasted unmodified every time.
  children: string;
};

export default function Supademo({children}: Props) {
  return <div dangerouslySetInnerHTML={{__html: children}} />;
}

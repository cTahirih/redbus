import React from 'react';
import TextParagraph from './TextParagraph';
import TextParagraphColor  from './TextParagraphColor';
import TextParagraphDetails  from './TextParagraphDetails';

const SectionThree = () => (
  <section className="col-12">
    <TextParagraphColor />
    <TextParagraph />
    <TextParagraphDetails />
  </section>
)

export default SectionThree;
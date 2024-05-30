import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    );
};

export default MarkdownEditor;

// take a sentence as input
// reverse the input sentence
const reverseSentence = (sentence) => {
    return sentence.split(' ').reverse().join(' ');
};

// take a sentence as input
const sentence = 'Hello, world!';

// reverse the input sentence
const reversedSentence = reverseSentence(sentence);

// the start of the sentence must start with a capital
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);
// the start of the sentence must start with a capital
// for javascript

const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
    { name: 'Bob', age: 40 }
    ]
  ];    

"use client";

import React from 'react'

interface RichTextProps {
  content: any
  className?: string
}

export function RichText({ content, className = '' }: RichTextProps) {
  if (!content) return null

  // If content is already a string (raw HTML or markdown string)
  if (typeof content === 'string') {
    return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
  }

  // If content is Lexical JSON
  if (content.root && Array.isArray(content.root.children)) {
    return (
      <div className={`article-rich-text ${className}`}>
        {content.root.children.map((node: any, idx: number) => (
          <RenderLexicalNode key={idx} node={node} />
        ))}
      </div>
    )
  }

  return null
}

function RenderLexicalNode({ node }: { node: any }) {
  if (!node) return null

  // Heading node
  if (node.type === 'heading') {
    const Tag = (node.tag || 'h3') as keyof React.JSX.IntrinsicElements
    const headingClasses: Record<string, string> = {
      h1: 'display-6 fw-bold text-blue mt-4 mb-3 fs-3',
      h2: 'text-blue mt-4 mb-3 fs-3',
      h3: 'text-blue mt-4 mb-3 fs-4',
      h4: 'text-blue mt-3 mb-2 fs-5',
      h5: 'text-blue mt-3 mb-2 fs-6',
      h6: 'text-blue mt-2 mb-2 fs-6',
    }
    return (
      <Tag className={headingClasses[node.tag] || 'text-blue mt-4 mb-3 fs-4'}>
        <RenderChildren node={node} />
      </Tag>
    )
  }

  // Paragraph node
  if (node.type === 'paragraph') {
    return (
      <p className="mb-3">
        <RenderChildren node={node} />
      </p>
    )
  }

  // List node
  if (node.type === 'list') {
    if (node.listType === 'number') {
      return (
        <ol className="mb-3 ps-4" style={{ listStyleType: 'decimal' }}>
          <RenderChildren node={node} />
        </ol>
      )
    }
    return (
      <ul className="mb-3 ps-4" style={{ listStyleType: 'disc' }}>
        <RenderChildren node={node} />
      </ul>
    )
  }

  // Listitem node
  if (node.type === 'listitem') {
    return (
      <li className="mb-2">
        <RenderChildren node={node} />
      </li>
    )
  }

  // Quote node
  if (node.type === 'quote') {
    return (
      <blockquote className="border-start border-primary ps-3 my-3 text-muted fst-italic">
        <RenderChildren node={node} />
      </blockquote>
    )
  }

  // Link node
  if (node.type === 'link') {
    const url = node.fields?.url || node.url || '#'
    const newTab = node.fields?.newTab ? '_blank' : undefined
    return (
      <a
        href={url}
        target={newTab}
        rel={newTab ? 'noopener noreferrer' : undefined}
        className="text-primary text-decoration-underline"
      >
        <RenderChildren node={node} />
      </a>
    )
  }

  // Default fallback for any container node with children
  if (Array.isArray(node.children)) {
    return <RenderChildren node={node} />
  }

  return null
}

function RenderChildren({ node }: { node: any }) {
  if (!node || !Array.isArray(node.children)) return null

  return (
    <>
      {node.children.map((child: any, idx: number) => {
        if (child.type === 'text') {
          let text: React.ReactNode = child.text

          // Lexical format bitmask: 1 = Bold, 2 = Italic, 4 = Strikethrough, 8 = Underline, 16 = Code
          const format = child.format || 0
          if (format & 1) text = <strong key="b">{text}</strong>
          if (format & 2) text = <em key="i">{text}</em>
          if (format & 4) text = <s key="s">{text}</s>
          if (format & 8) text = <u key="u">{text}</u>
          if (format & 16) text = <code key="c">{text}</code>

          return <React.Fragment key={idx}>{text}</React.Fragment>
        }

        if (child.type === 'linebreak') {
          return <br key={idx} />
        }

        return <RenderLexicalNode key={idx} node={child} />
      })}
    </>
  )
}

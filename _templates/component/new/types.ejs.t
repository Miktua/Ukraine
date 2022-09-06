---
to: <%= path %>/<%= name %>.props.ts
---
import { DetailedHTMLProps, HTMLAttributes } from 'react'

export interface <%= name %>Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	className?: string,
}



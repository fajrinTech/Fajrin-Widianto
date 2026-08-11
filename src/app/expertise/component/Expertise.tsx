'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Expertise.module.css'

interface TechItem {
  name: string
  desc: string
  icon: string
  glow: string
}

interface TechGroup {
  title: string
  items: TechItem[]
}

const techGroups: TechGroup[] = [
  {
    title: 'Frontend Stack',
    items: [
      { name: 'React', desc: 'Component-based UI architecture', icon: 'react', glow: '#61dafb' },
      { name: 'Next.js', desc: 'SSR, App Router & web performance', icon: 'nextjs', glow: '#a8a8a8' },
      { name: 'TypeScript', desc: 'Type-safe scalable development', icon: 'typescript', glow: '#3178c6' },
      { name: 'Tailwind CSS', desc: 'Utility-first utility styling', icon: 'tailwind', glow: '#38bdf8' },
      { name: 'Framer Motion', desc: 'Premium micro-animations', icon: 'motion', glow: '#ff007a' },
    ],
  },
  {
    title: 'Backend & APIs',
    items: [
      { name: 'Node.js', desc: 'Scalable runtime environments', icon: 'nodejs', glow: '#339933' },
      { name: 'Express.js', desc: 'Minimalist web API frameworks', icon: 'express', glow: '#7e7e7e' },
      { name: 'PostgreSQL', desc: 'Robust relational database systems', icon: 'postgres', glow: '#4169e1' },
      { name: 'MongoDB', desc: 'Flexible NoSQL document storage', icon: 'mongodb', glow: '#47a248' },
      { name: 'REST & GraphQL', desc: 'Efficient data architecture queries', icon: 'graphql', glow: '#e10098' },
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      { name: 'Git & GitHub', desc: 'Distributed version control systems', icon: 'git', glow: '#f05032' },
      { name: 'Google Cloud (GCP)', desc: 'Cloud architecture & deployments', icon: 'gcp', glow: '#4285F4' },
      { name: 'Vercel / Cloud', desc: 'Cloud deployment & optimization', icon: 'vercel', glow: '#ffffff' },
      { name: 'Figma', desc: 'Collaborative UI design & prototyping', icon: 'figma', glow: '#f24e1e' },
      { name: 'Supabase', desc: 'Backend-as-a-service & Postgres hosting', icon: 'supabase', glow: '#3ecf8e' },
    ],
  },
]

function TechIcon({ name }: { name: string }) {
  switch (name) {
    case 'react':
      return (
        <svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="0" cy="0" r="2.05" fill="currentColor" />
          <g stroke="currentColor">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    case 'nextjs':
      return (
        <svg viewBox="0 0 180 180" width="100%" height="100%">
          <mask height="180" id="nextjs_icon_dark__:r8:mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}>
            <circle cx="90" cy="90" fill="black" r="90" />
          </mask>
          <g mask="url(#nextjs_icon_dark__:r8:mask0_408_134)">
            <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
            <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#nextjs_icon_dark__:r8:paint0_linear_408_134)" />
            <rect fill="url(#nextjs_icon_dark__:r8:paint1_linear_408_134)" height="72" width="12" x="115" y="54" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="nextjs_icon_dark__:r8:paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="nextjs_icon_dark__:r8:paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875">
              <stop stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    case 'typescript':
      return (
        <svg viewBox="0 0 256 256" preserveAspectRatio="xMidYMid"><path d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z" fill="#3178C6" /><path d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z" fill="#FFF" /></svg>
      )
    case 'tailwind':
      return (
        <svg fill="none" viewBox="0 0 54 33" width="100%" height="100%">
          <g clipPath="url(#tailwindcss__a)">
            <path fill="#38bdf8" fillRule="evenodd" d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z" clipRule="evenodd" />
          </g>
          <defs>
            <clipPath id="tailwindcss__a">
              <path fill="#fff" d="M0 0h54v32.4H0z" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'motion':
      return (
        <svg viewBox="0 0 256 384" preserveAspectRatio="xMidYMid" width="100%" height="100%">
          <path fill="currentColor" d="M0 0h256v128H128L0 0Zm0 128h128l128 128H128v128L0 256V128Z" />
        </svg>
      )
    case 'nodejs':
      return (
        <svg viewBox="0 0 256 292" width="100%" height="100%">
          <defs>
            <linearGradient id="nodejs__a" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%">
              <stop offset="0%" stopColor="#41873F" />
              <stop offset="32.88%" stopColor="#418B3D" />
              <stop offset="63.52%" stopColor="#419637" />
              <stop offset="93.19%" stopColor="#3FA92D" />
              <stop offset="100%" stopColor="#3FAE2A" />
            </linearGradient>
            <linearGradient id="nodejs__c" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%">
              <stop offset="13.76%" stopColor="#41873F" />
              <stop offset="40.32%" stopColor="#54A044" />
              <stop offset="71.36%" stopColor="#66B848" />
              <stop offset="90.81%" stopColor="#6CC04A" />
            </linearGradient>
            <linearGradient id="nodejs__f" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%">
              <stop offset="9.192%" stopColor="#6CC04A" />
              <stop offset="28.64%" stopColor="#66B848" />
              <stop offset="59.68%" stopColor="#54A044" />
              <stop offset="86.24%" stopColor="#41873F" />
            </linearGradient>
            <path id="nodejs__b" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" />
            <path id="nodejs__e" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" />
          </defs>
          <path fill="url(#nodejs__a)" d="M134.923 1.832c-4.344-2.443-9.502-2.443-13.846 0L6.787 67.801C2.443 70.244 0 74.859 0 79.745v132.208c0 4.887 2.715 9.502 6.787 11.945l114.29 65.968c4.344 2.444 9.502 2.444 13.846 0l114.29-65.968c4.344-2.443 6.787-7.058 6.787-11.945V79.745c0-4.886-2.715-9.501-6.787-11.944L134.923 1.832Z" />
          <mask id="nodejs__d" fill="#fff">
            <use href="#nodejs__b" />
          </mask>
          <path fill="url(#nodejs__c)" d="M249.485 67.8 134.65 1.833c-1.086-.542-2.443-1.085-3.529-1.357L2.443 220.912c1.086 1.357 2.444 2.443 3.8 3.258l114.834 65.968c3.258 1.9 7.059 2.443 10.588 1.357L252.47 70.515c-.815-1.086-1.9-1.9-2.986-2.714Z" mask="url(#nodejs__d)" />
          <mask id="nodejs__g" fill="#fff">
            <use href="#nodejs__e" />
          </mask>
          <path fill="url(#nodejs__f)" d="M249.756 223.898c3.258-1.9 5.701-5.158 6.787-8.687L130.579.204c-3.258-.543-6.787-.272-9.773 1.628L6.786 67.53l122.979 224.238c1.628-.272 3.529-.815 5.158-1.63l114.833-66.239Z" mask="url(#nodejs__g)" />
        </svg>
      )
    case 'express':
      return (
        <svg viewBox="0 0 32 32" width="100%" height="100%">
          <path fill="currentColor" d="M32 24.795c-1.164.296-1.884.013-2.53-.957l-4.594-6.356-.664-.88-5.365 7.257c-.613.873-1.256 1.253-2.4.944l6.87-9.222-6.396-8.33c1.1-.214 1.86-.105 2.535.88l4.765 6.435 4.8-6.4c.615-.873 1.276-1.205 2.38-.883l-2.48 3.288-3.36 4.375c-.4.5-.345.842.023 1.325L32 24.795zM.008 15.427l.562-2.764C2.1 7.193 8.37 4.92 12.694 8.3c2.527 1.988 3.155 4.8 3.03 7.95H1.48c-.214 5.67 3.867 9.092 9.07 7.346 1.825-.613 2.9-2.042 3.438-3.83.273-.896.725-1.036 1.567-.78-.43 2.236-1.4 4.104-3.45 5.273-3.063 1.75-7.435 1.184-9.735-1.248C1 21.6.434 19.812.18 17.9c-.04-.316-.12-.617-.18-.92q.008-.776.008-1.552zm1.498-.38h12.872c-.084-4.1-2.637-7.012-6.126-7.037-3.83-.03-6.58 2.813-6.746 7.037z" />
        </svg>
      )
    case 'postgres':
      return (
        <svg viewBox="0 0 432.071 445.383" width="100%" height="100%">
          <g style={{ fillRule: 'nonzero', clipRule: 'nonzero', fill: 'none', stroke: 'currentColor', strokeWidth: 12.4651, strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 4 }}>
            <path d="M323.205 324.227c2.833-23.601 1.984-27.062 19.563-23.239l4.463.392c13.517.615 31.199-2.174 41.587-7 22.362-10.376 35.622-27.7 13.572-23.148-50.297 10.376-53.755-6.655-53.755-6.655 53.111-78.803 75.313-178.836 56.149-203.322-52.27-66.789-142.748-35.206-144.262-34.386l-.482.089c-9.938-2.062-21.06-3.294-33.554-3.496-22.761-.374-40.032 5.967-53.133 15.904 0 0-161.408-66.498-153.899 83.628 1.597 31.936 45.777 241.655 98.47 178.31 19.259-23.163 37.871-42.748 37.871-42.748 9.242 6.14 20.307 9.272 31.912 8.147l.897-.765c-.281 2.876-.157 5.689.359 9.019-13.572 15.167-9.584 17.83-36.723 23.416-27.457 5.659-11.326 15.734-.797 18.367 12.768 3.193 42.305 7.716 62.268-20.224l-.795 3.188c5.325 4.26 4.965 30.619 5.72 49.452.756 18.834 2.017 36.409 5.856 46.771 3.839 10.36 8.369 37.05 44.036 29.406 29.809-6.388 52.6-15.582 54.677-101.107" style={{ fill: 'currentColor', stroke: 'currentColor', strokeWidth: 37.3953, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} />
            <path d="M402.395 271.23c-50.302 10.376-53.76-6.655-53.76-6.655 53.111-78.808 75.313-178.843 56.153-203.326-52.27-66.785-142.752-35.2-144.262-34.38l-.486.087c-9.938-2.063-21.06-3.292-33.56-3.496-22.761-.373-40.026 5.967-53.127 15.902 0 0-161.411-66.495-153.904 83.63 1.597 31.938 45.776 241.657 98.471 178.312 19.26-23.163 37.869-42.748 37.869-42.748 9.243 6.14 20.308 9.272 31.908 8.147l.901-.765c-.28 2.876-.152 5.689.361 9.019-13.575 15.167-9.586 17.83-36.723 23.416-27.459 5.659-11.328 15.734-.796 18.367 12.768 3.193 42.307 7.716 62.266-20.224l-.796 3.188c5.319 4.26 9.054 27.711 8.428 48.969-.626 21.259-1.044 35.854 3.147 47.254 4.191 11.4 8.368 37.05 44.042 29.406 29.809-6.388 45.256-22.942 47.405-50.555 1.525-19.631 4.976-16.729 5.194-34.28l2.768-8.309c3.192-26.611.507-35.196 18.872-31.203l4.463.392c13.517.615 31.208-2.174 41.591-7 22.358-10.376 35.618-27.7 13.573-23.148z" style={{ fill: '#336791', stroke: 'none' }} stroke="none" />
            <path d="M215.866 286.484c-1.385 49.516.348 99.377 5.193 111.495 4.848 12.118 15.223 35.688 50.9 28.045 29.806-6.39 40.651-18.756 45.357-46.051 3.466-20.082 10.148-75.854 11.005-87.281M173.104 38.256S11.583-27.76 19.092 122.365c1.597 31.938 45.779 241.664 98.473 178.316 19.256-23.166 36.671-41.335 36.671-41.335M260.349 26.207c-5.591 1.753 89.848-34.889 144.087 34.417 19.159 24.484-3.043 124.519-56.153 203.329" />
            <path d="M348.282 263.953s3.461 17.036 53.764 6.653c22.04-4.552 8.776 12.774-13.577 23.155-18.345 8.514-59.474 10.696-60.146-1.069-1.729-30.355 21.647-21.133 19.96-28.739-1.525-6.85-11.979-13.573-18.894-30.338-6.037-14.633-82.796-126.849 21.287-110.183 3.813-.789-27.146-99.002-124.553-100.599-97.385-1.597-94.19 119.762-94.19 119.762" style={{ strokeLinejoin: 'bevel' }} />
            <path d="M188.604 274.334c-13.577 15.166-9.584 17.829-36.723 23.417-27.459 5.66-11.326 15.733-.797 18.365 12.768 3.195 42.307 7.718 62.266-20.229 6.078-8.509-.036-22.086-8.385-25.547-4.034-1.671-9.428-3.765-16.361 3.994z" />
            <path d="M187.715 274.069c-1.368-8.917 2.93-19.528 7.536-31.942 6.922-18.626 22.893-37.255 10.117-96.339-9.523-44.029-73.396-9.163-73.436-3.193-.039 5.968 2.889 30.26-1.067 58.548-5.162 36.913 23.488 68.132 56.479 64.938" />
            <path d="M172.517 141.7c-.288 2.039 3.733 7.48 8.976 8.207 5.234.73 9.714-3.522 9.998-5.559.284-2.039-3.732-4.285-8.977-5.015-5.237-.731-9.719.333-9.996 2.367z" style={{ fill: 'currentColor', strokeWidth: 4.155, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} />
            <path d="M331.941 137.543c.284 2.039-3.732 7.48-8.976 8.207-5.238.73-9.718-3.522-10.005-5.559-.277-2.039 3.74-4.285 8.979-5.015 5.239-.73 9.718.333 10.002 2.368z" style={{ fill: 'currentColor', strokeWidth: 2.0775, strokeLinecap: 'butt', strokeLinejoin: 'miter' }} />
            <path d="M350.676 123.432c.863 15.994-3.445 26.888-3.988 43.914-.804 24.748 11.799 53.074-7.191 81.435" />
          </g>
        </svg>
      )
    case 'mongodb':
      return (
        <svg fill="none" viewBox="0 0 120 257" width="100%" height="100%">
          <path fill="#00ED64" d="M82.323 28.55C71.537 15.795 62.249 2.84 60.35.15c-.2-.2-.5-.2-.7 0-1.897 2.69-11.185 15.645-21.971 28.4C-54.902 146.238 52.26 225.661 52.26 225.661l.9.597c.798 12.258 2.795 29.896 2.795 29.896h7.99s1.998-17.539 2.797-29.896l.899-.697c.1 0 107.263-79.323 14.68-197.01ZM59.95 223.867s-4.793-4.086-6.092-6.179v-.199l5.793-128.151c0-.4.6-.4.6 0l5.792 128.151v.199c-1.299 2.093-6.093 6.179-6.093 6.179Z" />
        </svg>
      )
    case 'graphql':
      return (
        <svg viewBox="0 0 100 100" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="6">
          <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" />
          <circle cx="50" cy="50" r="12" fill="currentColor" />
          <line x1="50" y1="10" x2="50" y2="90" />
          <line x1="15" y1="30" x2="85" y2="70" />
          <line x1="15" y1="70" x2="85" y2="30" />
        </svg>
      )
    case 'git':
      return (
        <svg viewBox="0 0 1024 1024" fill="none" width="100%" height="100%">
          <path fillRule="evenodd" clipRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" transform="scale(64)" fill="currentColor" />
        </svg>
      )
    case 'gcp':
      return (
        <svg preserveAspectRatio="xMidYMid" viewBox="0 -25 256 256" width="100%" height="100%">
          <path fill="#EA4335" d="m170.252 56.819 22.253-22.253 1.483-9.37C153.437-11.677 88.976-7.496 52.42 33.92 42.267 45.423 34.734 59.764 30.717 74.573l7.97-1.123 44.505-7.34 3.436-3.513c19.797-21.742 53.27-24.667 76.128-6.168l7.496.39Z" />
          <path fill="#4285F4" d="M224.205 73.918a100.249 100.249 0 0 0-30.217-48.722l-31.232 31.232a55.515 55.515 0 0 1 20.379 44.037v5.544c15.35 0 27.797 12.445 27.797 27.796 0 15.352-12.446 27.485-27.797 27.485h-55.671l-5.466 5.934v33.34l5.466 5.231h55.67c39.93.311 72.553-31.494 72.864-71.424a72.303 72.303 0 0 0-31.793-60.453" />
          <path fill="#34A853" d="M71.87 205.796h55.593V161.29H71.87a27.275 27.275 0 0 1-11.399-2.498l-7.887 2.42-22.409 22.253-1.952 7.574c12.567 9.489 27.9 14.825 43.647 14.757" />
          <path fill="#FBBC05" d="M71.87 61.425C31.94 61.664-.237 94.228.001 134.159a72.301 72.301 0 0 0 28.222 56.88l32.248-32.246c-13.99-6.322-20.208-22.786-13.887-36.776 6.32-13.99 22.786-20.208 36.775-13.888a27.796 27.796 0 0 1 13.887 13.888l32.248-32.248A72.224 72.224 0 0 0 71.87 61.425" />
        </svg>
      )
    case 'vercel':
      return (
        <svg viewBox="0 0 256 222" preserveAspectRatio="xMidYMid" width="100%" height="100%">
          <path fill="currentColor" d="m128 0 128 221.705H0z" />
        </svg>
      )
    case 'figma':
      return (
        <svg viewBox="0 0 54 80" fill="none" width="100%" height="100%">
          <g clipPath="url(#figma__clip0_912_3)">
            <path d="M13.3333 80.0002C20.6933 80.0002 26.6667 74.0268 26.6667 66.6668V53.3335H13.3333C5.97333 53.3335 0 59.3068 0 66.6668C0 74.0268 5.97333 80.0002 13.3333 80.0002Z" fill="#0ACF83" />
            <path d="M0 39.9998C0 32.6398 5.97333 26.6665 13.3333 26.6665H26.6667V53.3332H13.3333C5.97333 53.3332 0 47.3598 0 39.9998Z" fill="#A259FF" />
            <path d="M0 13.3333C0 5.97333 5.97333 0 13.3333 0H26.6667V26.6667H13.3333C5.97333 26.6667 0 20.6933 0 13.3333Z" fill="#F24E1E" />
            <path d="M26.6667 0H40.0001C47.3601 0 53.3334 5.97333 53.3334 13.3333C53.3334 20.6933 47.3601 26.6667 40.0001 26.6667H26.6667V0Z" fill="#FF7262" />
            <path d="M53.3334 39.9998C53.3334 47.3598 47.3601 53.3332 40.0001 53.3332C32.6401 53.3332 26.6667 47.3598 26.6667 39.9998C26.6667 32.6398 32.6401 26.6665 40.0001 26.6665C47.3601 26.6665 53.3334 32.6398 53.3334 39.9998Z" fill="#1ABCFE" />
          </g>
          <defs>
            <clipPath id="figma__clip0_912_3">
              <rect width="53.3333" height="80" fill="white" />
            </clipPath>
          </defs>
        </svg>
      )
    case 'supabase':
      return (
        <svg viewBox="0 0 109 113" fill="none" width="100%" height="100%">
          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint0_linear)" />
          <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#supabase__paint1_linear)" fillOpacity={0.2} />
          <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
          <defs>
            <linearGradient id="supabase__paint0_linear" x1="53.9738" y1="54.974" x2="94.1635" y2="71.8295" gradientUnits="userSpaceOnUse">
              <stop stopColor="#249361" />
              <stop offset="1" stopColor="#3ECF8E" />
            </linearGradient>
            <linearGradient id="supabase__paint1_linear" x1="36.1558" y1="30.578" x2="54.4844" y2="65.0806" gradientUnits="userSpaceOnUse">
              <stop />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      )
    default:
      return <span>✦</span>
  }
}

export default function Expertise() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="expertise" ref={ref} className={styles.section}>
      <motion.div
        className={styles.header}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <h2 className="headline-lg">Tech Stack & Expertise</h2>
        <p className={`body-lg ${styles.headerDesc}`}>
          A structured roadmap of the languages, frameworks, databases, and design systems I specialize in to build comprehensive, performance-driven web products.
        </p>
      </motion.div>

      {/* Mobile Tabs Bar */}
      <div className={styles.tabsContainer}>
        {techGroups.map((group, index) => (
          <button
            key={group.title}
            className={`${styles.tabBtn} ${activeTab === index ? styles.activeTabBtn : ''} label-caps`}
            onClick={() => setActiveTab(index)}
          >
            <span className={styles.tabLabel}>{group.title.split(' ')[0]}</span>
            {activeTab === index && (
              <motion.div
                layoutId="activeTabIndicator"
                className={styles.tabIndicator}
                transition={{
                  layout: {
                    type: 'spring',
                    stiffness: 450,
                    damping: 24,
                    mass: 0.8
                  },
                  // Explicitly separate x and width springs to create the elastic "Squash and Stretch" morphing
                  x: { type: 'spring', stiffness: 500, damping: 20, mass: 0.8 },
                  width: { type: 'spring', stiffness: 350, damping: 22, mass: 1.4 }
                }}
              />
            )}
          </button>
        ))}
      </div>

      <div className={styles.groupsContainer}>
        {techGroups.map((group, groupIndex) => (
          <div
            key={group.title}
            className={`${styles.groupColumn} ${activeTab === groupIndex ? styles.activeColumn : styles.inactiveColumn
              }`}
          >
            <motion.h3
              className={`label-caps ${styles.groupTitle}`}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: groupIndex * 0.12 }}
            >
              {group.title}
            </motion.h3>

            <div className={styles.techStackList}>
              {group.items.map((tech, i) => (
                <motion.div
                  key={tech.name}
                  className={`${styles.techCard} glass`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: groupIndex * 0.12 + i * 0.06,
                  }}
                  style={{
                    '--tech-glow-color': tech.glow,
                    '--tech-glow-shadow': tech.glow + '25', // 15% opacity glow
                  } as React.CSSProperties}
                >
                  <div className={styles.techIconBox}>
                    <TechIcon name={tech.icon} />
                  </div>
                  <div className={styles.techInfo}>
                    <h4 className={styles.techName}>{tech.name}</h4>
                    <p className={styles.techDesc}>{tech.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

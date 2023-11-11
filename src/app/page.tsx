import React from 'react';
import { Signika } from 'next/font/google';
import clsx from 'clsx';
import ClientGqlTest from '@/app/client-gql-test';
import { css } from '../../styled-system/css';
import { container, flex } from '../../styled-system/patterns';
import Image from 'next/image';
import bg from './bg.png';

const signika = Signika({ subsets: ['latin'] });

export default function Page() {
  return (
    <main
      className={clsx(
        css({
          display: 'flex',
          gap: 4,
          px: 4,
          flexDirection: 'column',
          h: 'screen',
          maxWidth: 'sm',
          mx: 'auto',
          md: {
            maxWidth: 'md',
          },
        }),
        'group'
      )}
    >
      <ClientGqlTest />

      <div
        className={clsx(
          container({
            my: 'auto',
          }),
          flex({
            direction: 'column',
            gap: 4,
          })
        )}
      >
        <h1
          className={clsx(
            css({
              fontSize: '5xl',
              md: {
                fontSize: '6xl',
              },
              fontWeight: 'semibold',
              lineHeight: 'none',
            }),
            signika.className
          )}
        >
          Hello there
        </h1>

        <Image
          src={bg}
          alt="Image effect"
          aria-hidden
          className={css({
            color: 'transparent',
            opacity: '0.2',
            position: 'fixed',
            top: 0,
            left: 0,
            pointerEvents: 'none',
            height: '100vh',
            objectFit: 'cover',
            filter: 'blur(10px)',
            width: '100%',
            transition: 'filter 0.5s ease-in-out',
            _groupHover: {
              filter: 'blur(0px)',
            },
          })}
        />

        <p
          className={css({
            opacity: '75',
            md: { fontSize: 'lg' },
          })}
        >
          Hi, I&rsquo;m a web developer (former designer) currently doing a lot of
          React, NodeJS and GraphQL. I have a passion for UX, interaction design, and creative problem solving.
        </p>

        <nav
          className={flex({
            gap: 4,
            mt: 2,
            fontSize: 'xl',
            lg: {
              fontSize: '3xl',
            },
          })}
        >
          <NavLink
            href="https://www.linkedin.com/in/jchilders62/"
            target="_blank"
            rel="noopener noreferrer"
            title="My LinkedIn Profile"
          >
            <LinkedInLogo aria-hidden />
          </NavLink>
          <NavLink
            href="https://github.com/jchild3rs"
            target="_blank"
            rel="noopener noreferrer"
            title="My GitHub Profile"
          >
            <GithubLogo aria-hidden />
          </NavLink>

          <NavLink
            href="https://dribbble.com/jchilders"
            target="_blank"
            rel="noopener noreferrer"
            title="My Dribbble Profile"
          >
            <DribbleLogo aria-hidden />
          </NavLink>

          <NavLink href="/api/rss" target="_blank" title="My Blog">
            <BlogIcon aria-hidden />
          </NavLink>
        </nav>
      </div>
    </main>
  );
}

function DribbleLogo(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 1000 1000"
      {...props}
    >
      <path d="M0 500c0-90.667 22.334-174.333 67-251 44.667-76.667 105.334-137.333 182-182C325.667 22.333 409.334 0 500 0c90.667 0 174.334 22.333 251 67 76.667 44.667 137.334 105.333 182 182 44.667 76.667 67 160.333 67 251s-22.333 174.333-67 251c-44.666 76.667-105.333 137.333-182 182-76.666 44.667-160.333 67-251 67-90.666 0-174.333-22.333-251-67-76.666-44.667-137.333-105.333-182-182C22.334 674.333 0 590.667 0 500zm83 0c0 104 35 195.667 105 275 32-62.667 82.667-122.333 152-179 69.334-56.667 137-92.333 203-107-10-23.333-19.666-44.333-29-63-114.666 36.667-238.666 55-372 55-26 0-45.333-.333-58-1 0 2.667-.166 6-.5 10-.333 4-.5 7.333-.5 10zm13-103c14.667 1.333 36.334 2 65 2 111.334 0 217-15 317-45-50.666-90-106.333-165-167-225-52.666 26.667-97.833 63.667-135.5 111-37.666 47.333-64.166 99.667-79.5 157zm149 432c75.334 58.667 160.334 88 255 88 49.334 0 98.334-9.333 147-28-13.333-114-39.333-224.333-78-331-61.333 13.333-123.166 47-185.5 101C321.167 713 275 769.667 245 829zM398 97c58.667 60.667 113 136.333 163 227 90.667-38 159-86.333 205-145-77.333-64-166-96-266-96-34 0-68 4.667-102 14zm199 298c10 21.333 21.334 48.333 34 81 49.334-4.667 103-7 161-7 41.334 0 82.334 1 123 3-5.333-90.667-38-171.333-98-242-43.333 64.667-116.666 119.667-220 165zm59 151c34 98.667 57 200 69 304 52.667-34 95.667-77.667 129-131 33.334-53.333 53.334-111 60-173-48.666-3.333-93-5-133-5-36.666 0-78.333 1.667-125 5z" />
    </svg>
  );
}

function GithubLogo(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 438.549 438.549"
      {...props}
    >
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
    </svg>
  );
}

function BlogIcon(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      viewBox="0 -256 1792 1792"
      fill="currentColor"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M596.61 1154.17q0 80-56 136t-136 56q-80 0-136-56t-56-136q0-80 56-136t136-56q80 0 136 56t56 136zm512 123q2 28-17 48-18 21-47 21h-135q-25 0-43-16.5t-20-41.5q-22-229-184.5-391.5t-391.5-184.5q-25-2-41.5-20t-16.5-43v-135q0-29 21-47 17-17 43-17h5q160 13 306 80.5t259 181.5q114 113 181.5 259t80.5 306zm512 2q2 27-18 47-18 20-46 20h-143q-26 0-44.5-17.5t-19.5-42.5q-12-215-101-408.5t-231.5-336q-142.5-142.5-336-231.5t-408.5-102q-25-1-42.5-19.5t-17.5-43.5v-143q0-28 20-46 18-18 44-18h3q262 13 501.5 120t425.5 294q187 186 294 425.5t120 501.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInLogo(
  props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      fill="currentColor"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </svg>
  );
}

function NavLink(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLAnchorElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
) {
  return (
    <a
      className={css({
        display: 'inline-block',
        opacity: '50%',
        transition: 'opacity 0.5s ease-in',
        fontSize: '3xl',
        md: { fontSize: '4xl' },
        _hover: {
          opacity: '100',
        },
      })}
      {...props}
    />
  );
}

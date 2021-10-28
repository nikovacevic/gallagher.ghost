.article
    word-break: break-word;

images

max-width for text

max-width for nav

font?

---

body
    div.viewport / display: flex; flex-direction: column; min-height: 100vh;
        header / flex-grow: 0;
        main / flex-grow: 1;
            article / padding: 8vmin 0; word-break: break-word;
                header / padding: 0 0 6vmin;
                    h1
                    div.byline
                    sections.tags
                section.content / display: grid; grid-template-columns: {see below}
        footer / flex-grow: 0;
    ghost-footer


grid-template-columns:
[full-start] minmax(4vmin,auto)
[wide-start] minmax(auto,240px)
[main-start] min(720px,calc(100% - 8vw))
[main-end] minmax(auto,240px)
[wide-end] minmax(4vmin,auto)
[full-end]

section.content > *
    grid-column: main-start/main-end;
.kg-width-wide
    grid-column: wide-start/wide-end;
.kg-width-full
    grid-column: full-start/full-end;

section.content > p
    font-family: var(--font-serif);
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1.4em;



--color-green: #a4d037;
--color-yellow: #fecd35;
--color-red: #f05230;
--color-darkgrey: #15171a;
--color-midgrey: #738a94;
--color-lightgrey: #c5d2d9;
--color-wash: #e5eff5;
--color-darkmode: #151719;
--font-sans-serif: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
--font-serif: Georgia,Times,serif;
--font-mono: Menlo,Courier,monospace;

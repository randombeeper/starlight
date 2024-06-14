    recordExtractor: ({ $, helpers, url }) => {
        // Remove in-page navigation components before extracting records.
        $(".cards-nav").remove();

        const isTutorialPage = /\/[\w-]+\/tutorial\//.test(url.pathname);
        const isErrorReference = /\/[\w-]+\/reference\/errors\//.test(
          url.pathname,
        );

        return helpers.docsearch({
          recordProps: {
            lvl1: "main h1",
            content: "main p, main li",
            lvl0: {
              // Use hidden tag on docs site to extract page categories.
              selectors: "#docsearch-lvl0",
              defaultValue: "Learn",
            },
            lvl2: "main h2",
            lvl3: "main h3",
            lvl4: "main h4",
            lvl5: "main h5",
          },
          indexHeadings: true,
        });
      }
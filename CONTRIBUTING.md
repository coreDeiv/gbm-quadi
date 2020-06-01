# Contributing to the Project
Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Problemas y etiquetas
Our bug tracker uses various tags to help organize and identify problems. This is what they represent and how we use them:

- `browser error`: Problems that are reported to us, but which are actually the result of a specific browser error.
- `css` - Problems derived from the CSS or Sass source files of the project.
- `js` - Problems derived from our compiled or source JavaScript files.
- `meta` - Problems with the project itself or with our repository.
- `Help wanted` - Problems that I need or would like the community to help us solve.

## Feature requests
Feature requests are unfortunately not welcome. This is because the project is under the contract of [Quadi](https://www.quadi.co/).

## Pull requests
Adhering to the following process is the best way to get your work
included in the project:

1. Clone the project, and configure the remotes and .editorconfig:

   ```powershell
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/gbm-solution-html

   # Navigate to the newly cloned directory
   cd gbm-solution-html

   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/coreDeiv/gbm-quadi.git
   ```
2. If you cloned a while ago, get the latest changes from upstream:

   ```powershell
   git checkout master
   git pull upstream master
   ```

3. Create a new topic branch (off the main project development branch) to
   contain your feature, change, or fix:

   ```powershell
   git checkout -b <topic-branch-name>
   ```

4. Commit your changes in logical chunks. Please adhere to these [git commit
   message guidelines](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)
   or your code is unlikely be merged into the main project. Use Git's
   [interactive rebase](https://help.github.com/articles/about-git-rebase/)
   feature to tidy up your commits before making them public.

5. Push your topic branch up to your branch-name:

   ```powershell
   git push origin <topic-branch-name>
   ```

6. [Open a Pull Request](https://github.com/coreDeiv/gbm-quadi/pulls) with a clear title and description against the `master` branch.


## Code guidelines

### HTML

[Adhere to the Code Guide.](https://codeguide.co/#html)

- Use tags and elements appropriate for an HTML5 doctype (e.g., self-closing tags).
- Use CDNs and HTTPS for third-party JS when possible. We don't use protocol-relative URLs in this case because they break when viewing the page locally via `file://`.
- Verify that your file complies with the rules of [W3C](https://validator.w3.org/)
- "Attractive"

### CSS

[Adhere to the Code Guide.](https://codeguide.co/#css)

- When feasible, default color palettes should comply with [WCAG color contrast guidelines](https://www.w3.org/TR/WCAG20/#visual-audio-contrast).
- Except in rare cases, don't remove default `:focus` styles (via e.g. `outline: none;`) without providing alternative styles. See [this A11Y Project post](https://a11yproject.com/posts/never-remove-css-outlines/) for more details.
- "Attractive"

### JS
- 1 tab (no spaces)
- strict mode
- "Attractive"
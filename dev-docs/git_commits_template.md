# Git Commits Template

    <type>(<scope>): <subject>
    
    <body>
    
    <footer>

`<type>`: A short, lowercase keyword indicating the type of change made. Examples include feat (new feature), fix (bug fix), docs (documentation), style (formatting, code style), refactor (code changes that neither fixes a bug nor adds a feature), test (adding or modifying tests), and chore (updating build tasks, package managers, etc.). This field should be the first word in your commit message and be all lowercase.

`<scope>` (optional): A short phrase indicating the part of the codebase that was changed. For example, server, client, docs, tests, etc. This field should be enclosed in parentheses, with no spaces before or after the parentheses.

`<subject>`: A short description of the change in the imperative mood, that is, in the present tense, as if giving a command. For example, "Add feature X", "Fix bug Y", "Refactor function Z", etc. This field should be brief and informative.

`<body>` (optional): A longer description of the change, providing more context and explaining the reasoning behind the change. This field should be separated from the subject by a blank line.

`<footer>` (optional): A footer section that can include information about breaking changes, issue tracking IDs, or other metadata relevant to the change. This field should also be separated from the body by a blank line.

Here's an example commit message:

    feat(server): Add new API endpoint for user login
    
    This commit adds a new API endpoint for user login, 
    allowing users to authenticate themselves and receive 
    a session token for subsequent API calls.
    
    Closes #1234

In this example, the type of change is feat (new feature), the scope is server, and the subject is "Add new API endpoint for user login". The body provides more context and explains the change in more detail, and the footer includes a reference to the issue being addressed (if applicable).

    []: # Path: docs/git_commits_template.md
/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
let gitDefinition = `Git is a version control system that allows users to take snapshots of their files and keep track of changes made, preventing bugs and loss of progress. Git also provides a way for multiple people to work on the same code. `;

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE

let gitHubDefinition = `GitHub is an online code-sharing platform where you can backup local repositories to a remote repository. People can share code, fork other's code, and back up their local git repositories. That way, if anything happens to their local machine, they've backed it up to gitHub and won't lose their work.`;

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = `git init will initialize a local repository in the folder you are currently inside of when you type it into the terminal. A repository is a fancy word for folder, and this is a must in order to upload your files to github.`;

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = `git clone copies an existing git repository. I haven't used this command yet but it's recognized as being primarily used to point to an existing repo and make a clone or copy of that repo in a new directory at another location. `;

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = `git status displays the state of the working directory and the staging area. It can be used to obtain a summary of which files have changes that are staged for the next commit.`;

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE

let gitAddDefinition = `git add adds some files to be tracked to the staging area. this must always be done before the commit command. It tells git that you want to include updates to a particular file in the next commit.`;

let gitAddCode = `git add .`; // will add all files

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE

let gitCommitDefinition = `git commit creates a snapshot of the files i'm tracking. can be thought of as "safe" versions of a project. git will never change them unless you ask it to.`;

let gitCommitCode = `git commit -m"initial commit"`;

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = `git push is the final command used for getting your git repo and all the work you've done with these different commands up a remote repository like gitHub. Before you can do this, you need to state the origin URL of your gitHub repo so it will know where to go.`;

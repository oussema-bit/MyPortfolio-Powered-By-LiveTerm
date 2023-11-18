// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import helptext from './help.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
      c += `\n${i})`+Object.keys(bin).sort()[i - 1] + ' ';
      c += helptext[Object.keys(bin).sort()[i - 1].toString()] + '\n';
  }
  return `Welcome! Here are all the available commands:
\n${c}
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'summary' to display summary.
`;
};

// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Hi, I am ${config.name}. 
Welcome to my website!
More about me:
'summary' - short summary.
'resume' - my latest resume.
'github' - my github profile.`;
};

export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
};



// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
/*export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const duckduckgo = async (args: string[]): Promise<string> => {
  window.open(`https://duckduckgo.com/?q=${args.join(' ')}`);
  return `Searching duckduckgo for ${args.join(' ')}...`;
};



export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};*/

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `a
bunch
of
fake
directories`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=hPr-Yc92qaY', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? memes? `;
};

// Banner
export const banner = (args?: string[]): string => {
  return `
 ██████╗ ██╗   ██╗███████╗███████╗ █████╗ ███╗   ███╗ █████╗      █████╗ ██╗   ██╗ █████╗ ██████╗ ██╗
██╔═══██╗██║   ██║██╔════╝██╔════╝██╔══██╗████╗ ████║██╔══██╗    ██╔══██╗╚██╗ ██╔╝██╔══██╗██╔══██╗██║
██║   ██║██║   ██║███████╗███████╗███████║██╔████╔██║███████║    ███████║ ╚████╔╝ ███████║██████╔╝██║
██║   ██║██║   ██║╚════██║╚════██║██╔══██║██║╚██╔╝██║██╔══██║    ██╔══██║  ╚██╔╝  ██╔══██║██╔══██╗██║
╚██████╔╝╚██████╔╝███████║███████║██║  ██║██║ ╚═╝ ██║██║  ██║    ██║  ██║   ██║   ██║  ██║██║  ██║██║
 ╚═════╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝    ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝

██╗     ██╗███╗   ██╗██╗   ██╗██╗  ██╗     █████╗ ██████╗ ███╗   ███╗██╗███╗   ██╗██╗███████╗████████╗██████╗  █████╗ ████████╗ ██████╗ ██████╗ 
██║     ██║████╗  ██║██║   ██║╚██╗██╔╝    ██╔══██╗██╔══██╗████╗ ████║██║████╗  ██║██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗
██║     ██║██╔██╗ ██║██║   ██║ ╚███╔╝     ███████║██║  ██║██╔████╔██║██║██╔██╗ ██║██║███████╗   ██║   ██████╔╝███████║   ██║   ██║   ██║██████╔╝
██║     ██║██║╚██╗██║██║   ██║ ██╔██╗     ██╔══██║██║  ██║██║╚██╔╝██║██║██║╚██╗██║██║╚════██║   ██║   ██╔══██╗██╔══██║   ██║   ██║   ██║██╔══██╗
███████╗██║██║ ╚████║╚██████╔╝██╔╝ ██╗    ██║  ██║██████╔╝██║ ╚═╝ ██║██║██║ ╚████║██║███████║   ██║   ██║  ██║██║  ██║   ██║   ╚██████╔╝██║  ██║
╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝  ╚═╝    ╚═╝  ╚═╝╚═════╝ ╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝
                                                                                                                                                

Type 'help' to see the list of available commands.
Type 'summary' to display summary.
Type 'resume' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.resume_url}" target="_blank">here</a></u> to access to my CV in pdf!
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};

//Certifications

//Technical skills

//Experiences

//Language levels

//Education

//Social links

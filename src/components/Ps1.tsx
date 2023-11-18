import React from 'react';
import config from '../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-ubuntu-textcolor dark:text-dark-ubuntu-textcolor">
        {config.ps1_username}
      </span>
      <span className="text-light-ubuntu-textcolor dark:text-dark-ubuntu-textcolor">@</span>
      <span className="text-light-ubuntu-textcolor dark:text-dark-ubuntu-textcolor">
        {config.ps1_hostname}
      </span>
      <span className="text-light-white dark:text-dark-white">:<span className='text-light-ubuntu-pathcolor text-lg'>~</span>$ </span>
    </div>
  );
};

export default Ps1;

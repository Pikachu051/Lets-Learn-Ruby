"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import { IconCaretLeft } from '@tabler/icons-react';
import { IconCaretRight } from '@tabler/icons-react';

const aptInstall = `$ sudo apt-get install ruby-full`;
const wingetInstall = `> winget install RubyInstallerTeam.Ruby.{MAJOR}.{MINOR}
# Example
> winget install RubyInstallerTeam.Ruby.3.2
# To see all versions avaliable
> winget search RubyInstallerTeam.Ruby
# Note: if you are installing ruby for projects, you may want to install RubyWithDevKit
> winget install RubyInstallerTeam.RubyWithDevKit.3.2`;

const installation = () => {
    return (
        <div className='h-[100vh]'>
            <h1 className='font-bold text-5xl pt-[50px] pl-[50px]'>Installation Guide</h1>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='pl-[100px] pt-[20px] w-[90%]'
            >                
                <h2 className='text-2xl text-red-400'>Package Management Systems</h2>
                <p className='pb-5'>If you cannot compile your own Ruby, and you do not want to use a third-party tool, you can use your system’s package manager to install Ruby.

                Some members of the Ruby community feel that you should avoid package managers to install Ruby and that you should use dedicated tools instead.

                It is possible that major package managers will install older Ruby versions instead of the latest release. To use the latest Ruby release, check that the package name matches its version number.</p>

                <h2 className='text-lg text-red-400'>apt (Debian or Ubuntu)</h2>
                <p className='pb-2'>To install Ruby using APT, run the following commands in your terminal:</p>
                <CodeHighlight code={aptInstall} language='bash' className='pb-5'/>

                <h2 className='text-lg text-red-400'>Windows Package Manager</h2>
                <p className='pb-2'>On Windows you can use this command in your Windows Package Manager CLI:</p>
                <CodeHighlight code={wingetInstall} language='bash' className='pb-5'/>

                <h2 className='text-2xl text-red-400'>Executable Installer</h2>
                <p className='pb-5'>You can download the latest version of Ruby for Windows from the <a href='https://rubyinstaller.org/downloads/' className='text-red-200 hover:text-red-400 hover:transition-all'>RubyInstaller download page</a>. Click on the version you want to install and follow the instructions.</p>
                <div className="pt-10 justify-center flex">
                    <Button component="a" href="/" variant='filled' color='red' className='mr-5'><IconCaretLeft/>Previous</Button>
                    <Button component="a" href="/variables" variant='filled' color='red' className=''>Next<IconCaretRight/></Button>
                </div>
            </motion.div>
        </div>
    );
};

export default installation;

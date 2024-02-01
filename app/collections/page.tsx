"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { CodeHighlight } from '@mantine/code-highlight';
import { Button } from '@mantine/core';
import { IconCaretLeft } from '@tabler/icons-react';
import { IconCaretRight } from '@tabler/icons-react';

const collections = () => {
    return (
        <div className=''>
            <h1 className='font-bold text-5xl pt-[50px] pl-[50px]'>Working with Ruby Strings, Arrays & Hashes</h1>
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='pl-[100px] pt-[20px] w-[90%]'
            >                
                <h2 className='text-2xl text-red-400'>What is a String?</h2>
                <p className='pb-5'>A variable is just a label.

It is a way to give names to things in your Ruby programs.

Like the names we give to real-world things.

<br/><br/>When I say “apple”, you know what I am talking about.

I do not have to describe it to you.

That is what variables do!

And they are way more useful that you may think.

<br/><br/>For example, you want to store some data into your program like your name or your age. Variables will be very useful in this kind of situation.</p>

                <h2 className='text-lg text-red-400'>Creating Local Variables</h2>
                <p className='pb-2'>You can create variables by associating a Ruby object with a variable name. We call this <i>variable assignment</i>.</p>
                <CodeHighlight code={`#Example
                age = 32`} language='ruby' className='pb-2'/>
                <p className='pb-2'>Now when you type <i>age</i> Ruby will translate that into <i>32</i></p>
                <br/><br/><p>Try it!</p>
                <br/><br/><p>There is nothing special about the word <i>age</i>. You could use </p>
                <CodeHighlight code={`#Example
                bacon = 32`} language='ruby' className='pb-2'/>
                <p>The of <i>bacon</i> value would still be 32.</p>
                <br/><br/><p className='pb-5'>Variables are just names for things.</p>
                <h2 className='text-lg text-red-400'>How to Use Variables</h2>
                <p className='pb-2'>To use a variable you write its name:</p>
                <CodeHighlight code={`#Example
                age * 10
                #320`} language='ruby' className='pb-2'/>
                <p className=''>This will return 320. You can also combine multiple variables together:</p>
                <CodeHighlight code={`#Example
                age = 32
                mutipliers = 10
                age * mutipliers
                #320`} language='ruby' className='pb-2'/>
                <p>And save the result of calculations or combinations into a new variable:</p>
                <CodeHighlight code={`#Example
                age = 32
                mutipliers = 10
                result = age * mutipliers`} language='ruby' className='pb-2'/>
                <p className='pb-5'>Now, <i>result</i> will be 320.</p>
                <h2 className='text-lg text-red-400'>Important!</h2>
                <p className=''>You can not use a variable without assigning a value to it. If you do, Ruby will throw an error.</p>
                <br/><p className='pb-5'>Also if you are running this code from a file, instead of irb, then you should use a method like <i>puts</i> to see the value of the variable.</p>
                <h2 className='text-lg text-red-400'>Ruby Variable Types</h2>
                <p className='pb-2'>Ruby has five types of variables:</p>
                <ul className='list-disc pl-5 pb-5'>
                    <li>Local Variables ( <i>apple</i> )</li>
                    <li>Instance Variables ( <i>@apple</i> )</li>
                    <li>Class Variables ( <i>@@apple</i> )</li>
                    <li>Global Variables ( <i>$apple</i> )</li>
                    <li>Constants ( <i>APPLE</i> )</li>
                </ul>
                <p className='pb-5'>You do not need to worry about these right now, but it is good to know they exist. The difference between them is on the <i>scope</i>. This means it depends on <i>from where can I access this variable?</i></p>
                <div className="pt-10 pb-5 justify-center flex">
                    <Button component="a" href="/installation" variant='filled' color='red' className='mr-5'><IconCaretLeft/>Previous</Button>
                    <Button component="a" href="/collections" variant='filled' color='red' className=''>Next<IconCaretRight/></Button>
                </div>
            </motion.div>
        </div>
    );
};

export default collections;

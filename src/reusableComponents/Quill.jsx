// Text editor WYSIWYG (What You See Is What You Get) editor 
// with formatting options such as alignment, bold, and other text formatting tools. 
// Quill.js


import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function Quill() {
    const [value, setValue] = useState('');

    return (
        <div className='h-[163px]'>
            <ReactQuill theme="snow" value={value} onChange={setValue} placeholder='Your text goes here' className='h-full rounded-md border-[#E0E3E7] hover:border-[#B2BAC2] focus:border-[#6F7E8C]'/>
        </div>
    )
}

export default Quill

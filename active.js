const handleActive=(event,className)=>{
    // event.preventDefault()
    console.log('burooj',className);
    // const anchorTags=document.getElementsByTagName('a')
    // console.log(anchorTags);

    // anchorTags.forEach((val) => val.classList.remove('activeClass'));

     // Use querySelectorAll for easier handling
     const anchorTags = document.querySelectorAll('a');

     // Remove the 'activeClass' from all anchors
     anchorTags.forEach((val) => val.classList.remove('activeClass'));
 
     // Add the 'activeClass' to the clicked link
     event.target.classList.add('activeClass');
    
}
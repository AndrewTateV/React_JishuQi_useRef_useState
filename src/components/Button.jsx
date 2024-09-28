import React from 'react'
import './Button.css'
export default function Button(props) {
                    // const { children, id, className } = props
                    const { className,handleClick, ...rest } = props;
                  
                    // console.log(id);
                    console.log(className, typeof className);
                  
                    const classes = 'btn large blue' + ' ' + className;
                  
                    return (
                      // <button id={id} className={classes} children={children} />
                      <button className={classes} 
                       onclick={handleClick}
                       {...rest} />
                    );
                  }
                  
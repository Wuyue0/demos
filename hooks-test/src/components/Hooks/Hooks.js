import React,{ useRef, useState, useEffect, useCallback } from 'react';


export default function Hooks(props) {
    const [num, setNum] = useState(0);

    useEffect(() => {
        console.log('componentDidmount')
        return () => {
            console.log('componentDidUnmount')
        }
    }, []);

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            console.log('componentDidUpdate')
        }
    });
    return (
        <>
            <div>Basics</div>            
        </>
    )
}
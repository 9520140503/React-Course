import { useState, useCallback, useEffect, useRef } from 'react'

export default function App() {
    const [length,setLength] = useState(8)
    const [showNumber,setShowNumber] = useState(false);
    const [showChar,setShowChar] = useState(false);
    const [Password,setPassword] = useState("");
    const passwordRef = useRef(null);
    const [buttonValue,setButtonValue] = useState("copy")

    // We have to catche the functions bw re-render: useCallBack.
    // it will memoize the function.
    // Optimization
    const PasswordGenerator = useCallback(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(showNumber) str += "0123456789"
        if(showChar) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

        for (let i = 1; i <= length; i++) {
           let charIndex = Math.floor(Math.random() * str.length +1);
           pass += str.charAt(charIndex);
        }

        console.log(pass);

        setPassword(pass);
    },[length,showNumber,showChar,setPassword])

    const copyPassword = useCallback(() => { 
        passwordRef.current?.select()
        //select particular range:
        passwordRef.current?.setSelectionRange(2,5)
        window.navigator.clipboard.writeText(Password)
        setButtonValue("copied ✔️")
    },[Password])


    //Runs: On page load or dependency change.
    useEffect(() => {
       PasswordGenerator()
    },[length,showNumber,showChar,PasswordGenerator])

  return (
    <>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 '>
            <div className='flex flex-col shadow rounded-lg overflow-hidden mb-4'>
                <h1 className='text-blue-600 text-2xl text-center'>Password Generator</h1>
            <div className='m-5 mx-auto bg-gray-400 p-5 rounded-lg'>
                 <input 
                type="text" 
                value={Password}  
                className='max-w-lg p-1 px-2 text-blue-500 rounded-lg outline-none'
                placeholder='password ....'
                readOnly
                ref={passwordRef}
                />
                <button 
                onClick={copyPassword}
                className='bg-blue-700 text-white p-1 rounded-md shrink-0'>{buttonValue}</button>
            </div>
            <div className='mx-0 bg-blue-200  rounded-lg p-2 flex justify-start items-center gap-x-3'>
                <input 
                className='cursor-pointer'
                type="range"
                min={8}
                max={20}
                value={length}
                onChange={(e) => {setLength(e.target.value)}} />
                <label htmlFor="length">[Length: {length}]</label>

             
                <div>
                    <input 
                    type="checkbox"
                    defaultChecked={showNumber}
                    onChange={() => {setShowNumber(prev => !prev)}}/>
                    <label htmlFor="number">Numbers</label>
                </div>
                <div>
                    <input 
                    type="checkbox"
                    defaultChecked={showChar}
                    onChange={() => {setShowChar(prev => !prev)}}
                    />
                    <label htmlFor="char">Characters</label>
                </div>
                
            </div>
            </div>
        </div>
        
    </>
  )
}

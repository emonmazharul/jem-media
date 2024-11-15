'use client'
import Image from "next/image";
import { useState,useEffect,useRef } from "react"
import { FormErrorMessage,FormSuccessMessage } from "./contactSection";

export function PagePopUp() {
    const [loading,setLoading] = useState(false);
    const [success,setSuccess] = useState('');
    const [error,setError] = useState('');
    const divRef = useRef(null);
    
    useEffect(() => {
        let timer = setTimeout(() => {
            let popupShowedStatus = localStorage.getItem('hasViewThePop')
            divRef.current.style.display = 'block';
        }, 2000);
        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        let timer = setTimeout(() => {
            setSuccess('');
        }, 12000);
        return () => clearTimeout(timer);
    }, [success]);

    const formHandler = async (e) => {
        e.preventDefault();
        const email = e.target.elements.clientEmail.value;

        // set the state to default;
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            const response = await fetch('/api/send-guide', {
                method:'POST',
                body:JSON.stringify({
                    email,
                })  
            });
            setLoading(false);
            console.log(response)
            if(response.status == 201) {
                const data = await response.json();
                console.log(data);
                setSuccess(data.message);
            }

        } catch (e) {
            setLoading(false);
            setError('Operation failed!Try again please.');
        }

    }
    return <div ref={divRef} style={{display:'none'}} className="shadow-2xl box-content w-[360px] h-[480px] md:w-[1000px] md:h-[550px] z-10  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white ">
      <div className="flex ">
        <div className="w-full md:w-1/2 px-10 py-10">
          <h2 className="mb-10 text-[21px] md:text-[28px] uppercase text-center font-extrabold">
            <span className="text-black">get your business a  </span>
            <br/>
            <span className="text-colorTwo">free marketing guide</span>
          </h2>
          <p className="mb-5 md:mb-10 text-[14px] md:text-[18px] text-center md:w-[95%] w-full">
            Enter your email address below to recieve a free marketing e-book worth £100s! 
          </p>
          
            <form onSubmit={formHandler} className="mb-4">
                <input
                  type="email"
                  placeholder="Email"
                  name="clientEmail"
                  className="w-full mb-4 pl-2 py-2 md:py-4 md:text-[18px] rounded-[10px]  border-2 border-gray-400 outline-none"
                />
                <br/>
                {/* <br/> */}
                {error ? <FormErrorMessage error={error}/> : null}
                {success ? <FormSuccessMessage success={success}/> : null}

                {/* <FormSuccessMessage/> */}
                <button className= "md:px-8 mt-4 w-full px-4 py-3 md:py-6 md:text-[20px] font-extrabold rounded-[10px] md:rounded-[20px] text-white uppercase bg-colorOne transition-all duration-100 ease-in-out hover:bg-colorTwo">
                   {loading ? 'Sending...' : ' claim free resources'}
                </button>
            </form>
            <div className="text-center">
              <button 
                onClick={() => divRef.current.style.display = 'none'} 
                className="md:my-3 my-4 font-semibold  text-center text-red-700 transition-all duration-75 hover:underline">
                  No, thanks. I hate free resources
              </button>
            </div>
        </div>
        <div className="hidden md:block md:w-1/2">
            <Image
              alt="Give us your email and got free pdf guide for builiding business"
              src="/image 1.png"
              className="h-[550px] object-cover"
              width="500"
              height="200"
            />
        </div>
      </div>
    </div>
  }
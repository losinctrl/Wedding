import React, { useEffect, useState } from 'react'

const Wedding = () => {
    
    const picPath = ['./assets/Pic1.jpeg', './assets/Pic2.jpeg'];
    const [index, setIndex] = useState(0);
    const [userPic, setUserPic] = useState(picPath[0]);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 2);
      }, 4000);
  
      return () => clearInterval(interval);
    }, []);
  
    useEffect(() => {
      const transitionTimeout = setTimeout(() => {
        setUserPic(picPath[index]);
      }, 500); // Adjust the duration of the transition here
  
      return () => clearTimeout(transitionTimeout);
    }, [index]);

    
  return (
    <>
       <div className="relative">
        <img
          src={userPic}
          className="h-screen object-cover"
          style={{
            opacity: 1,
            transition: 'opacity 0.5s ease-in-out', // Adjust the duration and easing as needed
          }}
        />
        <div className="absolute bottom-4 z-[99999] text-white p-10 flex flex-col justify-center items-start text-start leading-none">
          <div className="text-[72px] font-serif">Tulika weds Abhinay</div>
          <div className="mt-10 text-[24px] font-sans font-medium">
            We can't wait to share our special day with you and receive your
            blessing in our wedding vows
          </div>
        </div>
        <div className="absolute -z-1 top-0 w-full h-full bg-gradient-to-t from-black to-slate-10 opacity-30 bg-blend-multiply"></div>
      </div>
      <div className="bg-black relative  flex flex-col justify-center items-center text-white leading-none">
        <img
          src="./assets/ganesh.jpg"
          className="mb-4 h-screen object-cover"
        ></img>
        <div className="absolute top-[70%]">
          <div className="text-[3rem]">Wednesday</div>
          <div className="text-[3rem] mt-2">February 7, 2024</div>
          <div className="text-[2rem] mt-10">Lucknow, Uttar Pradesh, India</div>
        </div>
        <div className="absolute -z-1 top-0 w-full h-full bg-gradient-to-t from-black to-slate-10 opacity-5 bg-blend-multiply"></div>
      </div>
      <div className="mt-20 flex flex-col justify-center items-center">
        <div className="text-[3rem]">Events</div>
        {/* <div className="text-[1.1875rem] mt-10">Tuesday February 6, 2024</div> */}
        <div className="border-[1px] w-[85%] border-gray mt-2"></div>
        <div className="mt-20 relative">
          <img src="./assets/Haldi.jpeg" className="h-screen"></img>
          <div className="absolute top-[35%] flex flex-col justify-center items-center p-10 leading-tight">
            <div className="text-[1.1875rem] mt-10">
              Tuesday February 6, 2024
            </div>
            <div className="mt-2 text-[18px]">10:00 AM</div>
            <div className="mt-2 flex justify-center items-center text-[20px] font-sarif">
              Do Come in - YELLOW
            </div>
            <a
              rel="noopener nofollow"
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&amp;query=Vastum+City+-+Vastum+Sewa+Samiti%2C+Vastum+City%2C+Amausi%2C+Lucknow%2C+Uttar+Pradesh%2C+India"
              className="flex justify-center items-center mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                width="30"
                viewBox="0 0 384 512"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <div className="underline">
                Vastum City - Vastum Sewa Samiti, Vastum City, Amausi, Lucknow,
                Uttar Pradesh, India
              </div>
            </a>
          </div>
        </div>
        <div className=" relative w-full">
          <img src="./assets/Mehendi.jpeg" className="h-screen"></img>
          <div className="absolute top-[35%] left-[35%] w-[65%] leading-tight">
            <div className="text-[1.1875rem] mt-10">
              Tuesday February 6, 2024
            </div>
            <div className="mt-2 text-[18px]">04:00 PM</div>
            <div className="mt-2 flex justify-center items-center text-[20px] font-sarif">
              Do Come in - GREEN
            </div>
            <a
              rel="noopener nofollow"
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&amp;query=Vastum+City+-+Vastum+Sewa+Samiti%2C+Vastum+City%2C+Amausi%2C+Lucknow%2C+Uttar+Pradesh%2C+India"
              className="flex justify-center items-center mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="70"
                width="50"
                viewBox="0 0 384 512"
                className="ml-2"
              >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
              </svg>
              <div className="underline -ml-1">
                Vastum City - Vastum Sewa Samiti, Vastum City, Amausi, Lucknow,
                Uttar Pradesh, India
              </div>
            </a>
          </div>
        </div>
        <div className=" relative flex flex-col justify-center items-center">
          <img src="./assets/Shaadi.jpeg" className="h-screen"></img>
          <div className="absolute top-[20%] text-white p-10 leading-tight flex flex-col justify-center items-center">
            <div className="text-[40px]">SHAADI</div>
            <div className="text-[1.1875rem] mt-10">
              Wednesday February 7, 2024
            </div>
            <div className="mt-2 text-[18px]">08:00 PM</div>
            {/* <div className="mt-2">DRESS CODE - YELLOW</div> */}
            <a
              rel="noopener nofollow"
              target="_blank"
              href="https://www.google.com/maps/search/?api=1&query=Hotel+Ashiyana+residency%2C+226012%2C+Sector+L%2C+Ashiyana%2C+Lucknow%2C+Uttar+Pradesh%2C+India"
              className="flex  justify-center items-center mt-6 ml-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                width="30"
                viewBox="0 0 384 512"
              >
                <path
                  d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  fill="white"
                />
              </svg>
              <div className="underline ">
                Hotel Ashiyana residency, 226012, Sector L, Ashiyana, Lucknow,
                Uttar Pradesh, India
              </div>
            </a>
            <div className="mt-24 w-[80%]">
              <div>With Regards :</div>
              <div>Neeraj Kumar Srivastava</div>
              <div>Phone - 9415271665</div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-10  mb-10">
        <div className="text-[1.5rem]">╰☆☆🇵‌🇦‌🇷‌🇮‌🇻‌🇦‌🇷‌☆☆╮</div>
        <p className="text-start mt-2 text-[18px] p-6 text-gray-500 font-medium">
          Ladki Wale :<br />
          D/o - Anshu Srivastava and Niraj Kumar Srivastava
          <br /> Gr.D/o - Kusumlata Srivastava and Sureshchand Srivastava
          <br />
          <br />
          Ladke Wale :<br />
          S/O - Arti Srivastava and <br /> Narendra Kumar Srivastava
          <br />
          Gr.S/o - Shanti Devi and Sangamlal Srivastava
        </p>
      </div>

      <div className="mb-10 flex justify-around items-center p-8">
        <span
          onClick={(e) =>
            window.open(
              "https://api.whatsapp.com/send?phone=+919415271665&text=For%20Your%20Help",
              "_blank"
            )
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="36"
            viewBox="0 0 448 512"
          >
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </span>
        <a href="./assets/Invitation.pdf" download>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 512 512"
          >
            <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
        </a>
        <span onClick={(e)=> window.open('https://drive.google.com/drive/folders/19oLk3Je9ZXpl0ie8g0O860P1O9mwWaeu' , "_blank")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="40"
            width="40"
            viewBox="0 0 512 512"
          >
            <path d="M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z" />
          </svg>
        </span>
      </div>
    </>
  )
}

export default Wedding

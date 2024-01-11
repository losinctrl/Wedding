import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <div className='relative'>
        <img src="https://withjoy.com/media/e571bfda354f569def63a44e3d0443d86cc579276b352147e/kCGxqFH9TbyAhjPKEBdd_DSC_4583.jpg?rendition=xlarge" className='h-screen object-cover'/>
        <div className='absolute bottom-4 z-[99999] text-white p-10 flex flex-col justify-center items-start text-start leading-none'>
          <div className='text-[72px] font-serif'>Tulika weds Abhinay</div>
          <div className='mt-10 text-[24px] font-sans font-medium'>We can't wait to share our special day with you and receive your blessing in our wedding vows</div>
        </div>
        <div className='absolute -z-1 top-0 w-full h-full bg-gradient-to-t from-black to-slate-10 opacity-30 bg-blend-multiply' ></div>
      </div>
      <div className='bg-black h-screen flex flex-col justify-center items-center text-white leading-none'>
        <div className='text-[2rem]'>Wednesday</div>
        <div className='text-[2rem]'>February 7, 2024</div>
        <div className='text-[1.625rem] mt-10'>Lucknow, Uttar Pradesh, India</div>
      </div>
      <div className='mt-20 flex flex-col justify-center items-center'>
        <div className='text-[3rem]'>Events</div>
        <div className='text-[1.1875rem] mt-10'>Tuesday February 6, 2024</div>
        <div className='border-[1px] w-[85%] border-gray mt-2'></div>
        <div className='mt-20 relative'>
            <img src="./assets/Haldi.jpeg" className='h-screen'></img>
            <div className='absolute top-[40%] p-10 leading-tight'>
              <div>10:00 AM</div>
              <div className='mt-2'>DRESS CODE - YELLOW</div>
              <a rel="noopener nofollow" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=Vastum+City+-+Vastum+Sewa+Samiti%2C+Vastum+City%2C+Amausi%2C+Lucknow%2C+Uttar+Pradesh%2C+India" className='flex justify-center items-center mt-4'><svg xmlns="http://www.w3.org/2000/svg" height="50" width="30" viewBox="0 0 384 512" ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><div className='underline'>Vastum City - Vastum Sewa Samiti, Vastum City, Amausi, Lucknow, Uttar Pradesh, India</div></a>
            </div>
        </div>
        <div className=' relative w-full'>
            <img src="./assets/Mehendi.jpeg" className='h-screen'></img>
            <div className='absolute top-[40%] left-[35%] w-[65%] leading-tight'>
              <div>10:00 AM</div>
              <div className='mt-2'>DRESS CODE - YELLOW</div>
              <a rel="noopener nofollow" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=Vastum+City+-+Vastum+Sewa+Samiti%2C+Vastum+City%2C+Amausi%2C+Lucknow%2C+Uttar+Pradesh%2C+India" className='flex justify-center items-center mt-4'><svg xmlns="http://www.w3.org/2000/svg" height="70" width="50" viewBox="0 0 384 512" className='ml-2' ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><div className='underline -ml-1'>Vastum City - Vastum Sewa Samiti, Vastum City, Amausi, Lucknow, Uttar Pradesh, India</div></a>
            </div>
        </div>
        <div className=' relative flex flex-col justify-center items-center'>
            <img src="./assets/Shaadi.jpeg" className='h-screen'></img>
            <div className='absolute top-[20%] text-white p-10 leading-tight flex flex-col justify-center items-center'>
              <div className='text-[40px]'>SHAADI</div>
              <div className='mt-2'>10:00 AM</div>
              <div className='mt-2'>DRESS CODE - YELLOW</div>
              <a rel="noopener nofollow" target="_blank" href="https://www.google.com/maps/search/?api=1&amp;query=Vastum+City+-+Vastum+Sewa+Samiti%2C+Vastum+City%2C+Amausi%2C+Lucknow%2C+Uttar+Pradesh%2C+India" className='flex  justify-center items-center mt-6 ml-2'><svg xmlns="http://www.w3.org/2000/svg" height="50" width="30" viewBox="0 0 384 512" ><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" fill="white"/></svg><div className='underline '>Vastum City - Vastum Sewa Samiti, Vastum City, Amausi, Lucknow, Uttar Pradesh, India</div></a>
              <div className='mt-24 w-[80%]'>
<div>With Regards :</div>
<div>
Neeraj Kumar Srivastava
</div>
<div>
Phone - 9415271665
</div></div>
            </div>
            <div></div>
        </div>
      </div>

   </div>
  );
}

export default App;

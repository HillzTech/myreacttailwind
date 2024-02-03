import React from 'react'
import { Link } from 'react-router-dom'


export const Services = () => {
  return (
    <div className='p mt-[60px]' id='Services'>
        <h3 className='text-center font-extrabold text-3xl font-serif text-black/90 md:text-4xl lg:text-5xl'>Our Services <hr className='border-[2px] w-[20%]  ml-auto mr-auto border-primary rounded-[5px]'/></h3>
        
        <div className=' p-6 md:flex flex-row justify-around gap-7 mt-3'>
            <div className='bg-black px-4 rounded-[20px] min-h-[250px] mb-8 max-w-[370px] ml-auto mr-auto'>
            <img className="w-[100px] ml-auto mr-auto" src='Images/Vet-services.jpg' alt=''/>
            <h4 className='text-primary text-center font-bold font-serif'>Veterinary Services</h4>
            <p className='text-white text-center text-[13px]'>Meet our highly skilled veterinary doctors for clinical services such as vaccination, surgery, viral treatment, deworming etc.</p>
            <center><button className='bg-yellow-700 rounded-[7px] text-[13px] p-2 my-4 '><Link to='ServicePage'>Read More</Link></button> </center>

            </div>

            <div className='bg-black px-4 rounded-[20px] min-h-[250px] mb-8 max-w-[370px] ml-auto mr-auto'>
            <img className="w-[100px] ml-auto mr-auto" src='Images/adoption.png' alt=''/>
            <h4 className='text-primary text-center font-bold font-serif'>Pet Adoption/Mating Services</h4>
            <p className='text-white text-center text-[13px]'>We have various breeds of pets available for adoption and mating services. We also carry out importation and exportation of pets.</p>
            <center><button className='bg-yellow-700 rounded-[7px] text-[13px] p-2 my-4'><Link to='ServicePage'>Read More</Link></button> </center>

            </div>

            <div className='bg-black px-4 rounded-[20px] min-h-[250px] mb-8 max-w-[370px] ml-auto mr-auto'>
            <img className="w-[80px] ml-auto mr-auto pt-2" src='Images/food.png' alt=''/>
            <h4 className='text-primary text-center font-bold font-serif'>Pet Foods and Accessories</h4>
            <p className='text-white text-center text-[13px]'>Get highly nutritious and affordable foods and accessories such as cages, leashes, collars etc. for your puppies and pets.</p>
            <center><button className='bg-yellow-700 rounded-[7px] text-[13px] p-2 my-4'><Link to='ServicePage'>Read More</Link></button> </center>

            </div>

            <div className='bg-black px-4 rounded-[20px] min-h-[250px] max-w-[370px] mb-8 ml-auto mr-auto'>
            <img className="w-[100px] ml-auto mr-auto pt-3" src='Images/grooming.png' alt=''/>
            <h4 className='text-primary text-center font-bold font-serif'>Grooming Services</h4>
            <p className='text-white text-center text-[13px]'>
                Bath with non-toxic soap<br/>
                Nail Trimming<br/>
                Ear cleaning/plucking<br/>
                Hand blow drying<br/>
            </p>
            <center><button className='bg-yellow-700 rounded-[7px] text-[13px] p-2 my-4'><Link to='ServicePage'>Read More</Link></button> </center>

            </div>

            <div className='bg-black px-4 rounded-[20px] min-h-[250px] max-w-[370px] mb-8 ml-auto mr-auto'>
            <img className="w-[100px] ml-auto mr-auto pt-4" src='Images/fumigation.jpg' alt=''/>
            <h4 className='text-primary text-center font-bold font-serif'>Fumigation and Pest Control</h4>
            <p className='text-white text-center text-[13px]'>Get rid of ticks and fleas on your pets and in your homes with our special treatments and control services.</p>
            <center><button className='bg-yellow-700 rounded-[7px] text-[13px] p-2 my-4'><Link to='ServicePage'>Read More</Link></button> </center>

            </div>
        </div>
    </div>
  )
}

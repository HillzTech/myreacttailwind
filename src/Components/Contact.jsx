import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { AiFillInstagram, AiOutlineTwitter} from 'react-icons/ai';


export const Contact = (props) => {
  const location = [6.5533, 3.3431]; // Coordinates for 6 Agbi Close Cele Egbe Lagos
     
  return (
    <div className="p-5" id="contact">
       <div>
           
               <div className="bg-black rounded-[10px] text-white p-5">
                   <h2 className="text-center mb-4 ">Contact Info</h2>
                   <div className='flex flex-row justify-around align-center'>
                       <ul className="list-group-item">
                           <li className="list-group-item">
                                <span className="fw-bold">Main Location:</span> 6 Agbi Close Cele Egbe Lagos
                           </li>
                           <li className="list-group-item">
                                <span className="fw-bold">Enrollment Phone:</span> +2348061703360
    
                            </li>
                           <li className="list-group-item">
                               <span className="fw-bold">Enrollment Email:</span> deluxekennel@gmail.com
    
                            </li>
                        
                        </ul>
                        <p className="icons cursor-pointer">
                              <AiFillInstagram size={40}/>
                              <AiOutlineTwitter size={40}/>
                            </p>
                    </div>
              </div>

              
        
            
              
           
       </div>
       <div>
              <MapContainer center={location} zoom={20} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
        <Popup>
          6 Agbi Close, Cele Egbe, Lagos
        </Popup>
      </Marker>
    </MapContainer>


              </div>

    </div>
  )
}



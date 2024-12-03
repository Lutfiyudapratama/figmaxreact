import React from 'react';
import { Button, Card } from "flowbite-react";
import picture from '../assets/vehicle1.jpeg';
import picture2 from '../assets/vehicle2.jpeg';
import picture3 from '../assets/vehicle3.jpeg';

const Vehicle = () => {
  return (
    <div className='flex flex-wrap justify-center items-center'>
      <center>
       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
       Kendaraan yg tersedia</h5>
       </center>
    <div className='flex flex-wrap justify-between'>
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture}
      >
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
      
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture2}
      >
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
      
      <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={picture3}
      >
        <Button>
          <div className='text'>see more</div>
        </Button>
      </Card>
      </div>
    </div>
  );
}

export default Vehicle
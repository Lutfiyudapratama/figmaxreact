import React from 'react'
import picture from '../assets/borobudurv2.jpeg'
import { Card, Label, TextInput } from "flowbite-react"
import { Datepicker } from "flowbite-react";
const Form = () => {
  return (
    <div className='flex flex-center justify-center'>
      <section className="relative">
        <img
          src={picture}
          alt="borobudur"
          className="w-[10000px] h-[550px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40">
          <h1 className="text-4xl font-bold">Nikmati Perjalanan dengan T Transport</h1>
          <form className="mt-7">
            <div className="flex space-x-1">
              <Card href="#" className="max-w-sm">
                <div className="mb-0 block">
                  <Label htmlFor="small" value="From" />
                </div>
                <TextInput id="small" type="text" sizing="sm" />
                <div className="mb-0 block">
                  <Label htmlFor="date" value="Departure date" />
                  <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />
                </div>
                  </Card>
                  
              <Card href="#" className="max-w-sm">
                <div className="mb-0 block">
                  <Label htmlFor="small" value="To" />
                </div>
                <TextInput id="small" type="text" sizing="sm" />
                <div className="mb-0 block">
                  <Label htmlFor="small" value="return date" />
                </div>
                <Datepicker minDate={new Date(2023, 0, 1)} maxDate={new Date(2023, 3, 30)} />
                  </Card>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
export default Form;



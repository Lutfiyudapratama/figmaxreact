import React from 'react'
import { Card, Button, Checkbox, Label, TextInput } from "flowbite-react";
const Form = () => {
  return (
    <div className='flex flex-center justify-center'>
        <Card
        className="max-w-sm w-full sm:w-1/2 lg:w-1/3 p-2">
        
       <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value="Your email" />
        </div>
        <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </form>
    </Card>
    </div>
  )
}

export default Form;

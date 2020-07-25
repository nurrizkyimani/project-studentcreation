import Nav from '../components/nav'
import React, { useState, useEffect } from 'react';






export default function IndexPage() {

  const API_URL = process.env.API_URL

  useEffect(() => {
    console.log(API_URL);
    fetch(`local/project/all`, {
      method: 'GET',
      // headers: {
      //   'Authorization': 'Bearer' + authToken
      // }
    })
    .then(res => res.json())
    .then(data => { console.log(data) })
    .catch(err => { console.log(err) })
  }, []);



  return (
    <div>
      <Nav />
      <div className="hero">
        <h1 className="title">Next.js + Tailwind CSS</h1>
        <div className="flex p-10">
          
          <div className="w-1/4 shadow-xl bg-gray-300 p-10 rounded-md border  ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad dignissimos voluptatem similique excepturi sapiente delectus culpa natus atque odit. Aspernatur, consequatur! Laboriosam quae culpa, modi doloremque magni voluptatem voluptatibus repellat hic illo veniam, eum ab nisi id tenetur natus soluta nulla dignissimos eos dolores facere itaque ipsam eius sequi dicta?
          </div>


        </div>
      </div>
    </div>
  )
}

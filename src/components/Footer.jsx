import React from 'react'
import mockupdescarga from '../assets/images/mockupdescarga.png'
import logoPlayStore from '../assets/images/logo-play-store.png'

const Footer = () => {
  return (
    <section className='flex flex-col md:flex-row justify-center items-center p-8'>
        <div>
            <h2 className='text-primary text-5xl font-bold'>Descargala YA</h2>
            <p className='text-2xl'>Y has <span className='text-secundary'>match</span>  con tu <br /> trabajo ideal en <br /> Tecnología</p>
        </div>
        <div className='flex flex-col items-center '>
            <img src={mockupdescarga} alt="" />
            <button className="mt-12 bg-black h-[60px] w-[200px] flex justify-center items-center rounded-md text-[#fff]" >
          <img className="w-10" src={logoPlayStore} alt="Jobs Match" />
          <a download="../assets/apk/application-9c295edc-c987-45f7-a214-fc0215ca5278.apk" className="">
          DESCARGAR EN <br />
          <p>Google Play</p>
          </a>
        </button>
        </div>
    </section>
  )
}

export default Footer
import React from 'react';

const Video_team_seccion = () => {
    return (
        <section className='bg-slate-200 p-[1rem] flex justify-center items-center flex-col mb-[3rem] w-[95%] rounded-[3%] relative bottom-[11rem] min-[1000px]:bottom-[6rem]'>
        <h4 className='text-5xl font-bold pb-6 text-secundary text-center'><span>Sobre</span> nosotros</h4>
        <iframe className='w-4/5 h-[30rem] max-w-[50rem]' src="https://www.youtube.com/embed/DVNStbEbyBw" title="Buscas empleo? Jobs Match es para ti!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <div className='flex mt-[2rem] justify-center items-center cursor-pointer gap-[1rem] min-[299px]:flex-col min-[800px]:flex-row'>
        <a target="_blank" href='https://drive.google.com/file/d/1465ltUw0Iuh1xRZUCGIDQ8PZ7OKiUpJ9/view?usp=sharing' className='transition-all text-xl text-center text-primary hover:border-b-[3px]'><i className='bx bxs-file-pdf bx-md'></i> Mienbros del equipo de desarrollo</a>
        <a target="_blank" href='https://drive.google.com/file/d/1-ttpDB2zjOF4MHS4yaIFmDbf_NDRqdvS/view?usp=sharing' className='transition-all text-xl text-center text-secundary hover:border-b-[3px]'><i className='bx bxs-file-pdf bx-md'></i> Logotipo de la App</a>
        </div>
        </section>
    );
};

export default Video_team_seccion;
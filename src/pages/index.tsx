import {type NextPage } from 'next';

import SideBar from '@components/SideBar';
import Header from '@components/Header';

const Dashboard:NextPage = () => {

    return(
        <main className='h-screen w-screen relative'>
            <Header />
            <SideBar />
            <section className='h-full w-full bg-slate-400 flex justify-center items-center'>
                <div className='h-[30rem] w-[30rem] bg-gray-700 text-white rounded-md flex items-center justify-center'>
                    Modal
                </div>
            </section>
        </main>
    )
}

export default Dashboard;
import logo from '@/public/assets/images/logo.png';
export default function Menu() {

    return <>

        <div className="z-1 flex p-5 justify-between items-center max-w-7xl mx-auto absolute top-0 left-0 right-0">
            <div>
                <img src={logo.src} alt="" className='w-[220px]' />
            </div>
            <div className="flex font-bold text-[#4b97aa]">

                <ul className="flex gap-5 text-[#4b97aa]">
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#Home">Home</a>
                    </li>
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#About">About</a>
                    </li>
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#Experience">Experience</a>
                    </li>
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#Projects">Projects</a>
                    </li>
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#Skills">Skills</a>
                    </li>
                    <li className="first:before:hidden before:content-['|'] before:mr-4">
                        <a href="#Contact">Contact</a>
                    </li>
                </ul>


            </div>
        </div>
    </>
}
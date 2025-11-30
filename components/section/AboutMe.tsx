export default function AboutMe() {

    return <>
        <div className="py-10 text-[#3D3D3D]">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-center text-4xl mb-5 font-bold">About Me</h1>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        Brief intro paragraph about career and passion
                    </div>
                    <div>
                        <ul>
                            <li>Name</li>
                            <li> Email</li>
                            <li>Phone</li>
                            <li>
                                Location
                            </li>
                        </ul>




                    </div>
                </div>
            </div>
        </div>
    </>
}
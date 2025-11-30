
import hero from "../../public/assets/images/hero.png";
import pcGraphics from "@/public/assets/images/pc-graphics.png";
interface BannerProps {
    className?: string;
    id?: string;
}


export default function Banner({ className, id }: BannerProps) {
    return <>
        <div className={`${className}  pt-[60px] relative bg-[#f1f1f1] overflow-hidden`} id={`${id} `}>
            <div className="absolute w-full left-0 top-0 bg-[linear-gradient(180deg,#F5ECD5,transparent,transparent)] h-[400px]">
                
            </div>
            <div className="absolute w-[600px] right-0 bottom-0 h-[100px] opacity-50 bg-white z-0 transform-[skewX(10deg)]">

            </div>
            <img src={pcGraphics.src} alt="" className="absolute z-0 right-[-18%] bottom-0 w-[800px] opacity-25" />
            
            <div className="absolute  top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute shadow-[-800px_-800px_0_0_#2e4756] w-[200%] h-[273%] top-0 rounded-full ">

                </div>
            </div>
          
          
            <div className="max-w-7xl  mx-auto grid grid-cols-5 gap-5 relative ">
               
                <div className="col-span-2 flex justify-center">
                    <img src={hero.src} alt="" className="w-[500px] max-w-full relative "/>
                </div>
                <div className="col-span-3 justify-center flex flex-col text-[#3D3D3D] relative z-1 " >
                    <div className="text-6xl font-bold  text-[#4b97aa]">
                        Hi, I'm John Carlo Salazar
                    </div>
                    <div className="text-2xl font-bold">
                        Web Developer / Lead Developer
                    </div>

                    <div className="mt-5 italic ">
                        
                        I build websites, design systems, and manage cloud-based infrastructures.
                    </div>
                </div>
            </div>  
        </div>

    </>


}
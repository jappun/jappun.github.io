// const Home = () => {
//     return (
//     <div className="flex flex-col font-mont items-center justify-center h-screen">
//         <div className="text-primary w-full text-7xl font-extrabold text-center">
//             Hi, I'm Jappun.
//         </div>
//         <div className="max-w-screen flex justify-center text-lg text-primary mt-4 mx-4">
//             Building software. Telling stories. Finding the narratives in both.
//         </div>
//     </div>
// );};
import picture from "../img/london.jpg"
const Home = () => {
    return (
        <div className="flex flex-col md:flex-row font-mont items-center justify-center h-screen">
        

            <div className="flex flex-col">
                <div className=" text-primary w-full text-7xl font-extrabold text-center mt-4">
                    Hi, I'm Jappun.
                </div>
                <div className="max-w-screen flex justify-center text-lg text-center text-primary mt-4 mx-4">
                    Building software. Telling stories. Finding the narratives in both.
                </div>
            </div>

            <img 
                src={picture}
                alt="Jappun's Pic" 
                className="w-72 h-72 m-12 rounded-full object-cover border-4 border-primary shadow-xl"
            />
            

        </div>
    );
};

export default Home


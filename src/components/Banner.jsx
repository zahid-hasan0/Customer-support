
import vector1 from '../assets/vector1.png';
// import vector2 from '../assets/vector2.png';


const Banner = ({ progressCount, solveCount }) => {
    return (
        <div className="w-full flex gap-4 mt-8">
            {/* Progress Card */}
            <div
                className="flex-1 rounded-sm relative overflow-hidden flex flex-col items-center justify-center text-white h-[200px]"
                style={{
                    backgroundImage: `url(${vector1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    backgroundColor: '#8b5cf6'
                }}
            >
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-[20px] font-normal mb-1">In-Progress</h2>
                    <p className="text-7xl font-semibold leading-none">{progressCount}</p>
                </div>
            </div>

            {/* Resolved Card */}
            <div
                className="flex-1 rounded-sm relative overflow-hidden flex flex-col items-center justify-center text-white h-[200px]"
                style={{
                    backgroundImage: `url(${vector1})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'left',
                    backgroundColor: '#10b981'
                }}
            >
                <div className="relative z-10 flex flex-col items-center">
                    <h2 className="text-[20px] font-normal mb-1">Resolved</h2>
                    <p className="text-7xl font-semibold leading-none">{solveCount}</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;

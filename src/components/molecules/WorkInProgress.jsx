import workInProgressIcon from '../../assets/work-in-progress.gif'

export const WorkInProgress = () => {
    return <p className='hidden z-10 border-2 font-bold shadow-lg bg-white rounded-xl text-xs p-1 absolute top-[-35px] left-[-5px] group-hover:block transition-all duration-200 text-cyan-700 w-40'>Feature in-progress <img src={workInProgressIcon} alt="work in progress" className='w-6 inline-block' /></p>
} 
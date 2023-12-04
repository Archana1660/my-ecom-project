import { WorkInProgress } from '../molecules/WorkInProgress';
import searchIcon from '../../assets/searchIcon.png';

export const SearchInput = () => {
    return <div className='border-b flex items-center group relative'>
        <input type="text" className=" px-3 py-2 rounded-lg focus:outline-none" placeholder="Search" disabled/>
        <button disabled className='hidden xs:inline-block'><img src={searchIcon} alt="searchIcon" className='w-4 h-4' /></button>
        <WorkInProgress/>
    </div>
}
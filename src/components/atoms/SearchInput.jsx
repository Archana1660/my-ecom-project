import searchIcon from '../../assets/searchIcon.png';

export const SearchInput = () => {
    return <div className='border-b flex items-center'>
        <input type="text" className=" px-3 py-2 rounded-lg focus:outline-none" placeholder="Search" />
        <button><img src={searchIcon} alt="searchIcon" className='w-4 h-4' /></button>
    </div>
}
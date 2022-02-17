import { NavLink } from 'react-router-dom';

interface Props {
  topics: ITopic[];
}

interface ITopic{
  name: string;
  to: string;
}

export const Navbar = ({ topics }: Props) => {
  return (
    <div className="rounded mx-auto mt-5 bg-gradient-to-tr from-blue-600 to-purple-600 via-pink-500 p-1 w-4/5 ">
      <ul id="nav" className="text-2xl rounded font-bold flex justify-evenly flex-wrap gap-5 p-5">
        {
          topics.map((topic, index) => (
            <NavLink
              key={index}
              className={({ isActive }) => `bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-pink-500 to-violet-500 ${isActive && 'bg-gradient-to-r text-transparent'}`}
              to={topic.to}
            >{ topic.name }</NavLink>
          ))
        }
      </ul>
    </div>
  );
};
